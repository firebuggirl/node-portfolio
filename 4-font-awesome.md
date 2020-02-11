

  ` npm install --save-dev @fortawesome/fontawesome-free `


## Set up per project

  - create `.npmrc` in `./`

  - in `app.js`:

    ` app.use('/stylesheets/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/')); `

  - in `views/layout.pug`:

    - icon for my Dev link => https://dev.to/
    
    ` i.fab.fa-dev(title="juliettet's DEV Profile") `

    - NOT working...... don't have time to spend on this now...
