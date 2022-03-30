import winston from 'winston';

//
const { combine, timestamp, prettyPrint, json } = winston.format;
var level = process.env.LOG_LEVEL || 'info';
var format = combine(timestamp(), json(), prettyPrint({colorize: true}));

//
const logger = winston.createLogger({level, format});

//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console());
}


//
export {logger}