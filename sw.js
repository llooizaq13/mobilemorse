const CACHE_NAME = "mobilemorse-v1";
const URLS_TO_CACHE = [
  "index.html",
  "style.css",
  "app.js",
  "manifest.json",
  "fundo.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
