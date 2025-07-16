import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  paginas: number;
  anoPublicacao: number;
  editora: string;
  imagem: string;
  ondeComprar: string;
  nota: number;
  generos: { id: number; nome: string }[];
}

function LivroSelecionado() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [livro, setLivro] = useState<Livro | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/livros/${id}`)
      .then(res => res.json())
      .then(data => setLivro(data))
      .catch(err => console.error('Erro ao buscar livro:', err));
  }, [id]);

  if (!livro) return <p>Carregando...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem' }}> Voltar</button>

      <h1>{livro.titulo}</h1>
      <img src={livro.imagem} alt={livro.titulo} style={{ width: '200px', borderRadius: '8px' }} />
      <p><strong>Autor:</strong> {livro.autor}</p>
      <p><strong>Editora:</strong> {livro.editora}</p>
      <p><strong>Ano de publicação:</strong> {livro.anoPublicacao}</p>
      <p><strong>Páginas:</strong> {livro.paginas}</p>
      <p><strong>Nota:</strong> {livro.nota}/10</p>
      <p><strong>Gêneros:</strong> {livro.generos.map(g => g.nome).join(', ')}</p>
      <a href={livro.ondeComprar} target="_blank" rel="noreferrer">Compre Aqui</a>
    </div>
  );
}

export default LivroSelecionado;
