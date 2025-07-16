import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaCatalogo from './PaginaCatalogo';
import LivroSelecionado from './LivroSelecionado';
import PaginaCadastro from './PaginaCadastro'; 


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaCatalogo />} />
      <Route path="/livros/:id" element={<LivroSelecionado />} />
      <Route path="/cadastro" element={<PaginaCadastro />}/>
    </Routes>
  );
}
