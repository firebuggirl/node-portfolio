# PWA

https://developers.google.com/web/ilt/pwa/introduction-to-service-worker

- add/register worker:

  ` script.
  if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function() {
  console.log('Service Worker Registered');
  });
  }
`

- @ `./public/js` => create `sw.js` => add to webpack

- create an icon => save in sizes 128x128, 144x144, 152x152, 192x192, 512x512



- create `manifest.json` => static files served from the public folder => put manifest there..

- link to `manifest.json` in header

- NOTE: when testing in Chrome Dev Tools => applications/service workders => click `update on reload` => so service workers update on reload + `comment out service worker registration in layout.pug` until ready for production


## Check this out:
## Developing Progressive Web Apps (PWAs) Course

https://codelabs.developers.google.com/dev-pwa-training/



## Create offline.html as an Alias to index.html

 - use Pug file instead....not sure if this will work...

 https://blog.heroku.com/how-to-make-progressive-web-app


- default => service worker code below will `render /offline.html` instead of any resource it can't fetch while offline. Create a file at `<your-scope>/offline.html` (in this case, pug):

 ` cd views `

 ` ln -s layout.pug offline.pug `

 - add `offline.pug` to `sw.js`:

 ` return cache.addAll([
       "./", "./offline.pug"
   ]) `
