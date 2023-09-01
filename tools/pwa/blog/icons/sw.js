importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");
var cacheStorageKey = 'minimal-pwa-1'
var cacheList=[
  '/',
  'https://blog.yhz610.com',
  'https://cdn.yhz610.com/tools/pwa/blog/icons/main.css',
  'https://cdn.yhz610.com/tools/pwa/blog/icons/64.png'
]
self.addEventListener('install',e =>{
  e.waitUntil(
    caches.open(cacheStorageKey)
    .then(cache => cache.addAll(cacheList))
    .then(() => self.skipWaiting())
  )
})


self.addEventListener('fetch', function(event) {})
