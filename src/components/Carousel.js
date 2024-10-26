import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para a próxima imagem
  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Função para voltar para a imagem anterior
  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <img className="imagem"
        src={images[currentIndex]}
        alt="Imagem do Carrossel"
        style={{ width: "180px", height: "200px" }}
      />
      <button onClick={goToPrevious}>Anterior</button>

      <button onClick={goToNext}>Próximo</button>

      {/* Indicador de posição */}
      {/* <div>
        {currentIndex + 1} / {images.length}
      </div> */}
    </div>
  );
};

export default Carousel;
