import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import './index.css';
import { routes } from './routes/root.jsx';

hydrate();

async function hydrate() {
  const router = createBrowserRouter(routes);
  const container = document.getElementById('root');
  const app = hydrateRoot(
    container,
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
};

