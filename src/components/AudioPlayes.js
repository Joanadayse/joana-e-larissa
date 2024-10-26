import React from "react";
import ReactAudioPlayer from "react-h5-audio-player";
import music from "../music/08-The Scientist.mp3";

 




const AudioPlayer = () => {
  return (
    <div>
      
      <ReactAudioPlayer
        src={music} // Substitua pelo caminho do seu arquivo de áudio
        autoPlay={false} // Define se o áudio começa automaticamente ou não
        controls // Exibe os controles de áudio
        volume={0.5} // Define o volume inicial (de 0 a 1)
        onPlay={() => console.log("Reprodução iniciada")}
        onPause={() => console.log("Reprodução pausada")}
      />
    </div>
  );
};

export default AudioPlayer;
