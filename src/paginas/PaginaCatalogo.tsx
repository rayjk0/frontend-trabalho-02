import { LivrosCard } from '../componentes/LivrosCard';
import './Pagina.css';

function PaginaCatalogo() {
  return (
    <div className="pagina-container">
      <h1>📚 Catálogo de Livros</h1>
      <div className="livros-grid">
        <LivrosCard
          titulo="Dom Casmurro"
          autor="Machado de Assis"
          ano={1899}
          genero="Romance"
          preco={29.9}
          imagem="https://upload.wikimedia.org/wikipedia/commons/2/2d/Dom_Casmurro_-_1900_-_1%C2%AA_edicao.jpg"
        />

        <LivrosCard
          titulo="1984"
          autor="George Orwell"
          ano={1949}
          genero="Ficção"
          preco={42.5}
          imagem="https://m.media-amazon.com/images/I/61UwH9IN1JL.jpg"
        />
      </div>
    </div>
  );
}

export default PaginaCatalogo;
