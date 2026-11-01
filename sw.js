const C='winsim-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./icons/icon-192.png','./icons/icon-512.png'])))});
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
