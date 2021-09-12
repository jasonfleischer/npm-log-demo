const { log, logE, turnOffNonErrorLogs } = require("../node_modules/simple-log-kit/index")

log("This is a normal log message")
logE("This is an error log message")

//turnOffNonErrorLogs()
//log("this will not execute")
//logE("this will still execute")

document.getElementById("log_button").onclick = function() {  
	log('log message') 
};

document.getElementById("error_log_button").onclick = function() {  
	logE('error log message')
};  


const isWDS = require('isWDS')
isWDS()