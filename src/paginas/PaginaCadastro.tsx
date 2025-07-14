import './Pagina.css';

function PaginaCadastro() {
  return (
    <div className="pagina-container">
      <h1>Livraria Online</h1>

      {/* Exemplo de campos (adicione seus inputs e tabela aqui) */}
      <input type="text" placeholder="Filtrar por título" />
      <div className="form-box">
        <input type="text" placeholder="Título" />
        <input type="text" placeholder="Ano" />
        <input type="text" placeholder="Preço" />
        <button>Adicionar</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Ano</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {/* Seus dados virão aqui */}
        </tbody>
      </table>
    </div>
  );
}

export default PaginaCadastro;
