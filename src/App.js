import React from "react";
import imagem1 from "./img/imagem1.jpeg"
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


// import { Carousel } from "react-responsive-carousel";
import AudioPlayer from "./components/AudioPlayes";
import Carousel from "./components/Carousel";


function App() {
 
  return (
    <div className="app">
      <header>
        <h1>Nosso cantinho especial ❤️</h1>
      </header>

      <section>
        <h2>Nossas Memórias</h2>
        <Carousel
          images={[
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
          ]}
        />
      </section>

      <section>
        <h2>Minha musica favorita que agora me faz lembrar voce!🎶</h2>
        <AudioPlayer src="/music/our-song.mp3" />
      </section>

      <section>
        <h2>Pequenas Memórias</h2>
        <p>
          "Nosso piquinic na praia a luz do luar , e com o barulho do mar ... eu
          já sabia que amava voce!"
        </p>
        <p>"Você é a melhor pessoa que já conheci 💕"</p>
        <p>"O cheiro so seu suor e o gosto do seu beijo"</p>
      </section>

      <footer>
        <p>Com amor, Joana. ❤️</p>
      </footer>
    </div>
  );
}

export default App;
