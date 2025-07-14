import './LivrosCard.css';

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
        <p>
            <h5>Autor:
                </h5> {autor}</p>
        <p>
            <h5>Ano:  
                </h5> {ano}</p>
        <p>
            <h5>Gênero:
                </h5> {genero}</p>
        <p className="preco">R$ {preco.toFixed(2)}</p>
      </div>
    </div>
  );
}
