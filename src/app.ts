import express from 'express';
import type { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index.ts';

// ESM __dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();

// ---- View Engine Setup ----
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'resources', 'views'));

// ---- Global Middlewares ----
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets if needed
app.use(express.static(path.join(__dirname, '..', 'public')));

// ---- API & Application Routes ----
app.use(router);

// ---- 404 Not Found Middleware ----
app.use((req: Request, res: Response) => {
    res.status(404).json({
        error: 'Route not found',
    });
});

// ---- Global Error Handler ----
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
});

export default app;
