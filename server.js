import fs from 'fs';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";

async function createServer() {
    const app = express();
    const port = 5173;

    const indexProd = isProduction ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : ''

    let vite;
    if (!isProduction) {
        vite = await createViteServer({
            server: { middlewareMode: true },
            appType: 'custom',
            build: {
                ssr: true,
                ssrEmitAssets: true,
            },
        });
        app.use(vite.middlewares);
    } else {
        app.use((await import('compression')).default())
        app.use((await import('serve-static')).default(resolve('dist/client'), { index: false }));
    };

    app.use('*', async (req, res, next) => {
        const url = req.originalUrl;
        try {
            let template;
            let render;

            if (!isProduction) {
                template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
                template = await vite.transformIndexHtml(url, template);
                render = await vite.ssrLoadModule('/src/entry-server.jsx').then((m) => m.render);
            } else {
                template = indexProd;
                render = (await import('./dist/server/entry-server.js')).render;
            };

            const appHtml = await render(req);
            const html = template.replace(`<!--ssr-outlet-->`, appHtml);

            return res.status(200).set({'Content-Type': 'text/html'}).end(html);
        } catch (e) {
            console.log(e);
            if (!isProduction) { vite.ssrFixStacktrace(e); };
            next(e);
        }
    });

    app.listen(port, () => {
        console.log(`App is running at http://127.0.0.1:${port} in ${process.env.NODE_ENV} mode`)
    })
};

createServer();