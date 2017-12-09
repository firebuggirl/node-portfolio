* This is the Node.js version of my portfolio


  * Build Webpack modules:
   ` npm run assets `

  Watch Sass in separate terminal:

  ` sass --watch public/sass/style.scss:public/dist/style.css `



   https://github.com/firebuggirl/node-portfolio.git

   Deploy to Heroku:

   ` git clone git@github.com:firebuggirl/node-portfolio `

   ` heroku login `

   ` heroku create `


   *  can also bypass the above by naming your application from the start:

   ` heroku create juliettet-node-portfolio `



   * to re-name app
   ` heroku apps:rename juliettet-node-portfolio --app sleepy-bastion-39170 `

   * deploy from existing Github repo:
   ` heroku git:remote -a juliettet-node-portfolio `

   * First set up local environment variable(s) via Heroku site & set ENV to  production

   `heroku config:add NODE_ENV=production`
   * Add Node.js buildpack via Heroku site

   ` git push heroku master `

   heroku git:remote -a juliettet-node-portfolio

    heroku git:remote -a firebuggirl/node-portfolio
