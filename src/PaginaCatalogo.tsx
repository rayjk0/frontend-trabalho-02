import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PaginaCatalogo.css';

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  imagem: string;
}

export default function PaginaCatalogo() {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/livros')
      .then(res => res.json())
      .then(data => setLivros(data))
      .catch(err => console.error('Erro ao buscar livros', err));
  }, []);

  return (
    <div>
      <h1>LIVRARIA ONLINE</h1>
      <h1>Catálogo de Livros</h1>

      <Link to="/cadastro" style={{ display: 'inline-block', marginBottom: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007BFF', color: '#fff', borderRadius: '4px', textDecoration: 'none' }}>
        Cadastrar Novo Livro/Admin
      </Link>

      <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: 0 }}>
        {livros.map(livro => (
          <li key={livro.id} style={{ width: '200px', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <Link to={`/livros/${livro.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={livro.imagem} alt={livro.titulo} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
              <h3>{livro.titulo}</h3>
              <p>{livro.autor}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
