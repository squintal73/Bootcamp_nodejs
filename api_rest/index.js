import express from "express";
import routes from "./routers/accounts.js"
import winston from "winston";
import {promises as fs} from "node:fs";
import swaggerUi from "swagger-ui-express";
import {swaggerDocument} from "./docs.js";


const { readFile, writeFile } = fs;
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level} ${message}`;
})

global.fileName = "accounts.json";
global.logger = winston.createLogger({
    level:"silly",
    transports:[
        new(winston.transports.Console)(),
        new(winston.transports.File)({ filename: "api-rest.log"})
    ],
    format: combine (
        label({ label: "API REST"}),
        timestamp(),
        myFormat
    )
})

const app = express();
app.use(express.json());

app.use("/account", routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, async () => {
    try {
        await readFile(global.fileName);
        logger.info("API Started !!! ");
    } catch (err) {
        const initialJson = {
            nextId: 1,
            accounts: []
        }
        writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
            logger.info("API Started and file created !!!");
        }).catch(err => {
            logger.error(err);
        });
    }
});


