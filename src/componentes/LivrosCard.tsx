import './LivrosCard.css';
import './PaginaCatalogo';

interface LivroProps {
  titulo: string;
  autor: string;
  ano: number;
  genero: string;
  preco: number;
  imagem: string;
}

export function LivrosCard({ titulo, autor, ano, genero, preco, imagem }: LivroProps) {
  return (
    <div className="livro-card">
      <img src={imagem} alt={`Capa do livro ${titulo}`} className="livro-imagem" />
      <div className="livro-detalhes">
        <h3>{titulo}</h3>
        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Ano:</strong> {ano}</p>
        <p><strong>Gênero:</strong> {genero}</p>
        <p className="preco">R$ {preco.toFixed(2)}</p>
      </div>
    </div>
  );
}
