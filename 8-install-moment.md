# Display current date:

```yaml
npm i moment --save

# app.js

app.locals.moment = require('moment');

# layout.pug
p #{moment(Date.now()).format('MM/DD/YYYY')}
# or
p #{moment(Date.now()).format('YYYY')}
```
