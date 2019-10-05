# PWA

- add/register worker:

  ` script.
  if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function() {
  console.log('Service Worker Registered');
  });
  }
`

- @ `./` => create `sw.js`

- create an icon => save in sizes 128x128, 144x144, 152x152, 192x192, 512x512



- create `manifest.json` => static files served from the public folder => put manifest there..

- link to `manifest.json` in header
