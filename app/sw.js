// sw.js — Service Worker do app Verso Calmo (PWA).
//
// Estratégia:
//   • navegações (HTML)        → network-first: sempre o shell novo online,
//                                cai pro cache offline (evita servir HTML velho).
//   • dados em /app/data/*.json → network-first, cache de fallback.
//   • demais GET (css/js/tokens/fotos) → stale-while-revalidate: serve do cache
//                                na hora e atualiza em segundo plano.
//
// Versionar VERSAO continua invalidando o cache a cada deploy do app.

const VERSAO = 'vc-app-v7';

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
  './js/dados.js',
  './js/visor.js',
  './assets/icons/icon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './assets/icons/icon-180.png',
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

  // Navegações → network-first; offline cai pro shell em cache.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copia = res.clone();
          caches.open(VERSAO).then((c) => c.put('./index.html', copia));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
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

  // Demais GET (shell, tokens, fotos) → stale-while-revalidate:
  // serve do cache na hora e atualiza em segundo plano (próximo load já vem novo).
  e.respondWith(
    caches.match(req).then((cacheado) => {
      const rede = fetch(req)
        .then((res) => {
          if (res.ok && url.origin === location.origin) {
            const copia = res.clone();
            caches.open(VERSAO).then((c) => c.put(req, copia));
          }
          return res;
        })
        .catch(() => cacheado);
      return cacheado || rede;
    })
  );
});
