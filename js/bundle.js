(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const log=require("@jasonfleischer/log");log.i("This is a normal log message");log.e("This is an error log message");document.getElementById("log_button").onclick=function(){log.i("log message")};document.getElementById("error_log_button").onclick=function(){log.e("error log message")};
},{"@jasonfleischer/log":2}],2:[function(require,module,exports){
// Usage:

// in JS (ex main.js):
// const { log, logE, turnOffNonErrorLogs } = require("../node_modules/simple-log-kit/index")
// log("normal message");
// logE("error message");
// turnOffNonErrorLogs();
/*
var LOG_NON_ERROR_MESSAGES = true;

exports.log = (msg) => {
	if (LOG_NON_ERROR_MESSAGES)
		console.log(msg);
};

exports.logE = (msg) => {
	console.log("%c ERROR: " + msg, "background: red; color: white; display: block;");
};

exports.turnOffNonErrorLogs = () => {
	LOG_NON_ERROR_MESSAGES = false
};*/

////////

var LOG_NON_ERROR_MESSAGES = true;
const log = {};

log.i = function(msg) {
	if (LOG_NON_ERROR_MESSAGES)
		console.log(msg);
};

log.e = function(msg) {
	console.log("%c ERROR: " + msg, "background: red; color: white; display: block;");
};

log.turnOffNonErrorLogs = function() {
	LOG_NON_ERROR_MESSAGES = false;
};

module.exports = log;

},{}]},{},[1]);
