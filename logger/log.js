'use strict';
const winston = require('winston');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'logs';


if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

//Culture date format
const tsFormat = () => (new Date()).toLocaleTimeString();

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: 'info'
    }),
    new (require('winston-daily-rotate-file'))({
      filename: `${logDir}/-results.log`,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      prepend: true,
      level: env === 'development' ? 'verbose' : 'info'
    })
  ]
});

module.exports.logInfo = (function(message){
    logger.info(message);
});

module.exports.logError = (function(message){
    logger.error(message);
});

module.exports.logDebug = (function(message){
    logger.debug(message);
});

module.exports.logWarning = (function(message){
    logger.warn(message);
});