const CACHE_NAME = 'estoquepro-v1';
const urlsToCache = [
  '/repositor-de-estoque/',
  '/repositor-de-estoque/index.html',
  '/repositor-de-estoque/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
