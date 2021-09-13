## [@jasonfleischer/log](https://www.npmjs.com/package/@jasonfleischer/log)

A simple and lightweight log kit. Click [HERE](https://jasonfleischer.github.io/simple-log-kit-demo/) to see a demo

![Screenshot](https://jasonfleischer.github.io/simple-log-kit-demo/screenshot/screen.png "Screenshot")

#### Installation
```bash
$ npm i @jasonfleischer/log
```

#### Usage
``` javascript
const log = require("@jasonfleischer/log")

log.i("normal message");

log.e("error message");

log.turnOffNonErrorLogs();
```

