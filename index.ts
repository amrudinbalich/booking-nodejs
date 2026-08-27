import 'dotenv/config';
import app from './src/app.ts';

// todo: move this to config/app.js
const PORT = process.env.APP_PORT || 3000;
const PROTOCOL = process.env.HTTP_PROTOCOL || 'http';
const DOMAIN = process.env.APP_DOMAIN || 'localhost';

app.listen(PORT, () => {
    console.log(
        `Server running on :: ${PROTOCOL}://${DOMAIN}:${PORT}
    `);
});
