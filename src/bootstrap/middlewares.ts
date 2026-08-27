import app from "../app";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));