import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './Evarevaro.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
      Idhi Varaku, Manasuku Leni
Paravasamedho Modhalaindhe

Melakuvalo Oh, Kalila Thochi
Marujanmedho, Modhalaindhe
Emo Em Chesthunnanom, Inka Emem Chesthano
Chesthu Emaipothano Mari
Evarevaaro, Naakedhuraina
Nuvvu Kalisake Ae, Modhalaindhe Ae
Melakuvalo Oh, Kalila Thochi
Marujanmedho Oh, Modhalaindhe Ae🖤,<br />
      
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
