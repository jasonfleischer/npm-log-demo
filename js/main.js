//const log = require("../node_modules/@jasonfleischer/log/index")
const log = require("@jasonfleischer/log")

log.i("This is a normal log message")
log.e("This is an error log message")

//log.turnOffNonErrorLogs()
//log.i("this will not execute")
//log.e("this will still execute")

document.getElementById("log_button").onclick = function() {  
	log.i('log message') 
};

document.getElementById("error_log_button").onclick = function() {  
	log.e('error log message')
};  

