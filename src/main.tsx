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
