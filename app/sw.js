// sw.js — Service Worker do app Verso Calmo (PWA).
//
// Estratégia:
//   • shell (HTML/CSS/JS/ícones/tokens) → cache-first: abre instantâneo e offline.
//   • dados em /app/data/*.json          → network-first: sempre tenta o mais novo,
//                                           cai pro cache se estiver offline.
//   • demais GET do mesmo domínio (fotos) → cache-first preenchido sob demanda.
//
// Versionar VERSAO invalida todo o cache a cada deploy do app.

const VERSAO = 'vc-app-v2';

const SHELL = [
  './',
  './index.html',
  './app.css',
  './manifest.webmanifest',
  './js/app.js',
  './js/respiro.js',
  './js/guardados.js',
  './js/loja.js',
  './js/presentear.js',
  './js/storage.js',
  './assets/icons/icon.svg',
  './assets/icons/icon-maskable.svg',
  '/tokens.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSAO)
      .then((c) => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((chaves) => Promise.all(
        chaves.filter((k) => k !== VERSAO).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Navegações → devolve o shell (SPA por hash).
  if (req.mode === 'navigate') {
    e.respondWith(caches.match('./index.html').then((r) => r || fetch(req)));
    return;
  }

  // Dados do app → network-first.
  if (url.origin === location.origin && url.pathname.startsWith('/app/data/')) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copia = res.clone();
          caches.open(VERSAO).then((c) => c.put(req, copia));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Demais GET → cache-first, preenchendo sob demanda (só mesmo domínio e resposta boa).
  e.respondWith(
    caches.match(req).then((cacheado) => {
      if (cacheado) return cacheado;
      return fetch(req)
        .then((res) => {
          if (res.ok && url.origin === location.origin) {
            const copia = res.clone();
            caches.open(VERSAO).then((c) => c.put(req, copia));
          }
          return res;
        })
        .catch(() => cacheado);
    })
  );
});
