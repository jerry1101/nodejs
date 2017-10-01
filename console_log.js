var log4js = require('log4js');

log4js.configure({
    appenders: {
        everything: {
        type: "dateFile",
        filename: "console",
        pattern: "-yyyy-MM-dd.log",
        alwaysIncludePattern: true }
      },
      categories: {
        default: { appenders: [ 'everything' ], level: 'debug' }
      }
});

var logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");