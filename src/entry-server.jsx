import React from "react";
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider, } from 'react-router-dom/server';

import { routes } from './routes/root';

export async function render(request) {
    const handler = createStaticHandler(routes);

    const fetchRequest = createFetchRequest(request);
    const context = await handler.query(fetchRequest);
    const router = createStaticRouter(handler.dataRoutes, context);

    return renderToString(
        <React.StrictMode>
            <StaticRouterProvider router={router} context={context} />
        </React.StrictMode>
    );
}

function createFetchRequest(req) {
    let origin = `${req.protocol}://${req.get("host")}`;
    // Note: This had to take originalUrl into account for presumably vite's proxying
    let url = new URL(req.originalUrl || req.url, origin);

    let controller = new AbortController();
    req.on("close", () => controller.abort());

    let headers = new Headers();

    for (let [key, values] of Object.entries(req.headers)) {
        if (values) {
        if (Array.isArray(values)) {
            for (let value of values) {
            headers.append(key, value);
            }
        } else {
            headers.set(key, values);
        }
        }
    }

    let init = {
        method: req.method,
        headers,
        signal: controller.signal,
    };

    if (req.method !== "GET" && req.method !== "HEAD") {
        init.body = req.body;
    }

    return new Request(url.href, init);
};