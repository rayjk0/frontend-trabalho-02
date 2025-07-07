import React, { useState, useEffect } from 'react';
type Livro = { id:number; titulo:string; ano_publicacao:number; preco:number };

export default function Pagina() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [form, setForm] = useState({ titulo:'', ano:'', preco:'' });
  const [filtro, setFiltro] = useState('');

  async function buscar() {
    const q = filtro ? `?titulo=${encodeURIComponent(filtro)}` : '';
    const res = await fetch('http://localhost:8000/livros'+q);
    setLivros(await res.json());
  }
  useEffect(() => { buscar(); }, []);

  async function salvar() {
    await fetch('http://localhost:8000/livros', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        titulo:form.titulo, ano_publicacao:+form.ano, preco:+form.preco })
    });
    setForm({ titulo:'', ano:'', preco:'' });
    buscar();
  }

  async function excluir(id:number) {
    await fetch('http://localhost:8000/livros/'+id,{ method:'DELETE' });
    buscar();
  }

  return (
    <div className="cont">
      <h1>Livraria Online</h1>

      <input placeholder="Filtrar por título" value={filtro}
             onChange={e=>setFiltro(e.target.value)}
             onKeyUp={e=>e.key==='Enter' && buscar()} />

      <div className="form">
        <input placeholder="Título"
               value={form.titulo}
               onChange={e=>setForm({...form,titulo:e.target.value})} />
        <input type="number" placeholder="Ano"
               value={form.ano}
               onChange={e=>setForm({...form,ano:e.target.value})} />
        <input type="number" step="0.01" placeholder="Preço"
               value={form.preco}
               onChange={e=>setForm({...form,preco:e.target.value})} />
        <button onClick={salvar}>Adicionar</button>
      </div>

      <table>
        <thead><tr><th>Título</th><th>Ano</th><th>Preço</th><th></th></tr></thead>
        <tbody>
          {livros.map(l=>(
            <tr key={l.id}>
              <td>{l.titulo}</td><td>{l.ano_publicacao}</td><td>R$ {l.preco}</td>
              <td><button onClick={()=>excluir(l.id)}>Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
