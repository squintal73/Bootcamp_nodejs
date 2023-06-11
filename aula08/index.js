import express from "express";
import winston from "winston";

const app = express();
app.use(express.json());

const { combine, printf, label, timestamp } = winston.format;


const myformat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
});

const logger = winston.createLogger({
    level:"silly",
    transports:[
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "logger.log"})
    ],
    format: combine(
        label({ label: "my-app"}),
        timestamp(),
        myformat
    )
});

logger.error("Error log");
logger.warn("warn log");
logger.info("Info log");
logger.verbose("Verbose log");
logger.level;

app.listen(3001, () => {
    console.log("server started ...");
})



