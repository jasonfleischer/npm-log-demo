## [simple-log-kit](https://www.npmjs.com/package/simple-log-kit)

A simple and lightweight log kit. Click [HERE](https://jasonfleischer.github.io/simple-log-kit-demo/) to see a demo

![Screenshot](https://jasonfleischer.github.io/simple-log-kit-demo/screenshot/screen.png "Screenshot")

#### Installation
```bash
$ npm i simple-log-kit --save
```

#### Usage
``` javascript
const { log, logE, turnOffNonErrorLogs } = require("../node_modules/simple-log-kit/index")

log("normal message");

logE("error message");

turnOffNonErrorLogs();
```

