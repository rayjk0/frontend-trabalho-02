import React from 'react';
function PaginaCatalogo() {
 return  (
    <div className="pagina-container">
      <h1> Pagina Catalogo</h1>

      <ul className="livros-lista">
        <li>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Dom_Casmurro_-_1900_-_1%C2%AA_edicao.jpg"
            alt="Capa do livro Dom Casmurro"
          />
          <p><strong>Título:</strong> Dom Casmurro</p>
          <p><strong>Autor:</strong> Machado de Assis</p>
          <p><strong>Ano:</strong> 1899</p>
          <p><strong>Gênero:</strong> Romance</p>
          <p><strong>Preço:</strong> R$ 29,90</p>
        </li>

        <li>
          <img
            src="https://m.media-amazon.com/images/I/61UwH9IN1JL.jpg"
            alt="Capa do livro 1984"
          />
          <p><strong>Título:</strong> 1984</p>
          <p><strong>Autor:</strong> George Orwell</p>
          <p><strong>Ano:</strong> 1949</p>
          <p><strong>Gênero:</strong> Ficção</p>
          <p><strong>Preço:</strong> R$ 42,50</p>
        </li>
      </ul>
    </div>
  );
}

export default PaginaCatalogo;
