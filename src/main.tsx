<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import PaginaCatalogo from './PaginaCatalogo.tsx';
import PaginaCadastro from './PaginaCadastro.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render
(
  <React.StrictMode>
    <App />
    <PaginaCatalogo />
    <PaginaCadastro />
  </React.StrictMode>
  );
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from "./App.tsx";
import Componente from "./Componente.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/componente",
    element: <Componente />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
>>>>>>> 0ffbccdfc481566a061c340d007f1bb4178f4b74
