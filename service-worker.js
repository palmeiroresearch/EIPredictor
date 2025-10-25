// Service Worker para EIP App
const CACHE_VERSION = 'eip-v1.0.0';
const CACHE_NAME = `eip-app-${CACHE_VERSION}`;

// Archivos a cachear
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Instalando...');
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Cacheando archivos');
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch(err => {
        console.error('[ServiceWorker] Error al cachear:', err);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activando...');
  
  event.waitUntil(
    caches.keys()
      .then(keyList => {
        return Promise.all(keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Eliminando cache antigua:', key);
            return caches.delete(key);
          }
        }));
      })
      .then(() => self.clients.claim())
  );
});

// Estrategia de fetch: Cache First, falling back to Network
self.addEventListener('fetch', event => {
  // Solo cachear peticiones GET
  if (event.request.method !== 'GET') return;
  
  // Ignorar peticiones a otros orígenes
  if (!event.request.url.startsWith(self.location.origin)) return;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devolver de cache si existe
        if (response) {
          console.log('[ServiceWorker] Sirviendo desde cache:', event.request.url);
          return response;
        }
        
        // Si no está en cache, hacer fetch
        console.log('[ServiceWorker] Fetching:', event.request.url);
        return fetch(event.request)
          .then(response => {
            // No cachear respuestas no válidas
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clonar la respuesta para cachear
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(err => {
            console.error('[ServiceWorker] Fetch failed:', err);
            // Aquí podrías devolver una página offline personalizada
          });
      })
  );
});

// Manejo de mensajes del cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
