// src/components/AudioPlayer.jsx
import React, { useEffect, useRef } from "react";
import backgroundMusic from "../assets/background-music.mp3"; // Import the music file

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={backgroundMusic} type="audio/mpeg" />
    </audio>
  );
};

export default AudioPlayer;
