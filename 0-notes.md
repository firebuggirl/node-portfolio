## This is the Node.js version of my portfolio

## Note

- before re-deploying to Heroku => first run:

  `npm run dev` => save/recompile files to `dist` => then push to Heroku

* Build Webpack modules:

   `npm run assets`

  Watch Sass in separate terminal:

  `sass --watch public/sass/style.scss:public/dist/style.css`

* Compile all files via Webpack during development:

    `npm run dev`

   https://github.com/firebuggirl/node-portfolio.git

*   Deploy to Heroku:

   `git clone git@github.com:firebuggirl/node-portfolio`

   `heroku login`

   `heroku create`


   *  can also bypass the above by naming your application from the start:

   `heroku create juliettet-node-portfolio`



   * to re-name app

   `heroku apps:rename juliettet-node-portfolio --app sleepy-bastion-39170`

   * deploy from existing Github repo:

   `heroku git:remote -a juliettet-node-portfolio`

   * First set up local environment variable(s) via Heroku site & set ENV to  production

   `heroku config:add NODE_ENV=production`

   * Add Node.js buildpack via Heroku site

   `git push heroku master`

   * https://juliettet-node-portfolio.herokuapp.com/

   * Add root domain

   `heroku domains:add www.juliettetworsey.com.`

   * Sync with DNS/Create CNAME:

   `www.juliettetworsey.com.herokudns.com.`

   * Point DNS @ new target, 1st verify DNS Target:

   * `heroku domains`

   * Verify that CNAME is set up correctly:

   * `dig www.juliettetworsey.com cname +short`

   * Upgrade dyno status, create certs

     https://devcenter.heroku.com/articles/automated-certificate-management

   `heroku certs:auto:enable`//Hobby or above tier required for ACM

   * Check Status:

   * `heroku certs:auto`

   * Verify certs:

   `heroku certs:info`

   * Verify redirect to custom domain w/ SSL enabled:

   `curl -vI https://www.juliettetworsey.com`

   - DNS troubleshooting:

          https://devcenter.heroku.com/articles/automated-certificate-management#troubleshooting

          https://stackoverflow.com/questions/44808324/dns-with-heroku-and-google-domains-ssl-forwarding

          - GSuite: Look up and check CNAME records

            https://support.google.com/a/answer/93595

          - Use WHOIS lookup:

            https://whois.icann.org/en/lookup?name=juliettetworsey.com

          - G Suite Support:

          https://support.google.com/a/answer/1047213


## Check headers:

https://securityheaders.io/


## SNYK test for vulnerabilities:

`snyk test`

- Run `snyk wizard` to explore remediation options


## Adding prerender-node

https://github.com/prerender/prerender-node

  `npm install prerender-node --save`

  `app.use(require('prerender-node'));`

  - Or if you have a token/account on `prerender.io`:

  - https://prerender.io/

      `app.use(require('prerender-node').set('prerenderToken', 'YOUR_TOKEN'));`

  - in `Heroku` Config variables UI:

 `heroku config:set PRERENDER_TOKEN=YOUR_TOKEN`


  -  add `<meta name="fragment" content="!">` to the <head> of all of your pages

  * Testing locally:


    `localhost:7777/?_escaped_fragment_=`
