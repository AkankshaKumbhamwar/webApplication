import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import { json } from "body-parser";
import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV, PORT, SERVICE_NAME } = process.env;
const is_production = (NODE_ENV == 'PRODUCTION') ? true : false;

const port = parseInt(`${PORT}`) || 4054;
const app = express();
app.set('trust proxy', true);
app.use(json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
