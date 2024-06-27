import React, { useEffect, useRef } from "react";
import backgroundMusic from "../assets/background-music.mp3"; // Ensure this path is correct

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    console.log("AudioPlayer mounted");
    const playAudio = () => {
      console.log("Attempting to play audio");
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented: ", error);
      });
    };

    document.addEventListener("click", playAudio);
    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={backgroundMusic} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
