import React, { useRef } from "react";
import imagem1 from "./img/imagem1.jpeg";
import imagem2 from "./img/imagem2.jpeg";
import imagem3 from "./img/imagem3.jpeg";
import imagem4 from "./img/imagem4.jpeg";
import imagem5 from "./img/imagem5.jpeg";
import imagem6 from "./img/imagem6.jpeg";
import imagem7 from "./img/imagem7.jpeg";
import imagem8 from "./img/imagem6.jpeg";
import imagem9 from "./img/imagem9.jpeg";
import imagem10 from "./img/imagem10.jpeg";
import "./App.css";
import musica from "./music/08-The Scientist.mp3";
import Slider from "react-slick";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
  };

  const images = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
    imagem7,
    imagem8,
    imagem9,
    imagem10,
  ];

  const audioRef = useRef(null);

  const startAudio = () => {
    audioRef.current.play();
  };

  return (
    <div className="app">
      <header>
        <h1>Nosso cantinho especial ❤️</h1>
      </header>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-container">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "auto", height: "100%" }}
            />
          </div>
        ))}
      </Slider>

      <section>
        <h2>Minha musica favorita que agora me faz lembrar voce!🎶</h2>
        <button onClick={startAudio}>Iniciar Música</button>
        <audio ref={audioRef} src={musica} loop />
      </section>

      <section>
        <p>Seu abraço que protege,e transborda cuidado e amor.</p>
        <p>
          Seu cheiro tão gostoso e bom de sentir que mais parece uma casa limpa,
          que te convida sempre a ficar mais um pouquinho! 💕"
        </p>
        <p>
          Tudo em ti parece novidade mas é estranhamente conhecido aos meus
          olhos!
        </p>
        <p>
         Te li em dezenas de livros e finalmente te achei!!!
        </p>
      </section>

      <footer>
        <p>Com amor, Joana. ❤️</p>
      </footer>
    </div>
  );
}

export default App;
