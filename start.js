// Start our app!
const app = require('./app');

// import environmental variables from .env

require('dotenv').load();

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
