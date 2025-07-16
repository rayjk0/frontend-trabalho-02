import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaginaCadastro.css';

interface LivroForm {
  id?: number;
  titulo: string;
  autor: string;
  paginas: number;
  anoPublicacao: number;
  editora: string;
  imagem: string;
  ondeComprar: string;
  nota: number;
  generos: number[];
}

interface Genero {
  id: number;
  nome: string;
}

export default function PaginaCadastro() {
    const navigate = useNavigate();
  const [livros, setLivros] = useState<any[]>([]);
  const [generos, setGeneros] = useState<Genero[]>([]);
  const [form, setForm] = useState<LivroForm>({
    titulo: '',
    autor: '',
    paginas: 0,
    anoPublicacao: 0,
    editora: '',
    imagem: '',
    ondeComprar: '',
    nota: 1,
    generos: []
  });

  useEffect(() => {
    fetch('http://localhost:8000/livros')
      .then(res => res.json())
      .then(setLivros);

    fetch('http://localhost:8000/generos')
      .then(res => res.json())
      .then(setGeneros);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'nota' || name === 'anoPublicacao' || name === 'paginas' ? Number(value) : value }));
  };

  const handleGeneroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, opt => Number(opt.value));
    setForm(prev => ({ ...prev, generos: selected }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = form.id ? 'PUT' : 'POST';
    const url = form.id
      ? `http://localhost:8000/livros/${form.id}`
      : 'http://localhost:8000/livros';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    alert(`Livro ${form.id ? 'atualizado' : 'cadastrado'} com sucesso!`);
    window.location.reload();
  };

  const handleEdit = (livro: any) => {
    const generosIds = livro.generos.split(', ').map((_: any, i: number) => i + 1); // Adapte se necessário
    setForm({ ...livro, generos: generosIds });
  };

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja deletar este livro?')) {
      await fetch(`http://localhost:8000/livros/${id}`, { method: 'DELETE' });
      alert('Livro deletado!');
      window.location.reload();
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
        
    <button onClick={() => navigate(-1)}>Voltar</button>
      <h1>{form.id ? 'Editar Livro' : 'Cadastrar Novo Livro'}</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} required />
        <input name="autor" placeholder="Autor" value={form.autor} onChange={handleChange} required />
        <input name="paginas" type="number" placeholder="Páginas" value={form.paginas} onChange={handleChange} required />
        <input name="anoPublicacao" type="number" placeholder="Ano" value={form.anoPublicacao} onChange={handleChange} required />
        <input name="editora" placeholder="Editora" value={form.editora} onChange={handleChange} required />
        <input name="imagem" placeholder="URL da Imagem" value={form.imagem} onChange={handleChange} required />
        <input name="ondeComprar" placeholder="Link para Comprar" value={form.ondeComprar} onChange={handleChange} required />
        <input name="nota" type="number" placeholder="Nota (1-10)" min={1} max={10} value={form.nota} onChange={handleChange} required />

        <select multiple value={form.generos.map(String)} onChange={handleGeneroChange}>
          {generos.map(g => (
            <option key={g.id} value={g.id}>{g.nome}</option>
          ))}
        </select>

        <button type="submit">{form.id ? 'Atualizar' : 'Cadastrar'}</button>
      </form>

      <h2>Livros Cadastrados</h2>
      <ul>
        {livros.map(l => (
          <li key={l.id} style={{ marginBottom: '1rem' }}>
            <strong>{l.titulo}</strong> ({l.autor}) — <em>{l.generos}</em><br />
            <button onClick={() => handleEdit(l)}>Editar</button>
            <button onClick={() => handleDelete(l.id)} style={{ marginLeft: '0.5rem', color: 'red' }}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
