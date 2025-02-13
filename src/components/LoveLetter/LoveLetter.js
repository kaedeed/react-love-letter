import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './Sifaarishon.mp3';

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
        Dear Cupcake 🖤,<br />
        I cannot express how much I love you. You have always been there for me, and I want you to know I am there for you in every step of your life as well. You don't know how grateful I am to God that I have got a person like you in my life.<br />
        Chaand Sitaaro ko asmaan me Dhoondhte hai sabhi<br />
        Par hote hai kuch is zameen par bhi<br />
        Jhalaktein Aakhon mein jaise ho dhoop savere ki<br />
        Zindagi mein faila de khoobsurti aur khushiyan<br />
        Jaise Hawaye saanjh ki...<br />
        Sukoon us awaaaz me jaise dawayein dard ki<br />
        Ab aage kya bolu....Samandar hai wahi mere in duaon ki<br />
        @Yours Aki
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;