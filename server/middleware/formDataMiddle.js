import express  from "express";
import morgan from 'morgan';
import cors from 'cors';
import formidableMiddleware from 'express-formidable';
import cookieParser from 'cookie-parser';
function setMiddleware(app) {
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(formidableMiddleware());
    app.use(express.json({}));
    app.use(morgan('dev'));
    app.use(cookieParser()); 
}

export default setMiddleware