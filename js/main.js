const { log, logE, turnOffNonErrorLogs } = require("../node_modules/simple-log-kit/index")

log("This is a normal log message")
logE("This is an error log message")

//turnOffNonErrorLogs()
//log("this will not execute")
//logE("this will still execute")

function drawChord() {
	log('log message')
}

function drawNote() {
	logE('error log message')
}