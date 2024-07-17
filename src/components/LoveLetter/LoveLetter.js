import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

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
      My dear Sahana,<br></br> I think u may not know this, but u r the one who first tied rakhi to me, before you nobody has tied rakhi putta.
      I still remember the color, it is dark pink on the top and yellow thread, you tied it when you are in first standard 
      You always used to come to me when we were in ground and you used to talk to me, since from that time iam always fond of you 
      I always loved you the same way till today.<br></br> 
      Do u remember, u were not having any mobile before , you used to ping me from your mother's FB account, 
      You may be thinking that, bidu avru seniors avr yenukke namgella reply madtare anta, but u wont believe 
      I was waiting for your messages always gotta, neenu ping madudre nange yest kushi aagodo gotta.<br></br> 
      Ninna meet madake anta railway station atra iro manege bandidde nenpidiya, neenu mane melgade bandu HII madtidde 
      Elru nange adkolovru gotta nodu guru sumne aa san hudgi na nodake ast doodra hogtane anta 
      But avrgu nin thara thangi idre gottagutte daily matadod bekagilla atleast yearly once or twice avl mukha nodudre saaku varsha poorti kushi aagi irbodu anta<br></br> 
      Ond sari nepidiya nan number iskond barkondu yavagadru video call madtidde, those were cute moments putta 
      Ivaga daily chat madtivi, ond dina text mad didru yeno ond thara kalkondange agutte gotta, Nange yest attachment idiyo 
      Ningu nan mele aste attachment ide gottu nange, bere avr kathe gotilla but nan thangi diffrent alva putta, even though naav ibru 
      bere bere kade idru we are made to be brother and sister ansutte<br></br>
      Always remember you will be always my first priority and i will be always there for you, no matter where iam abd what iam doing 
      Neenond message madudre il ping you right away yene kelsa irli nange, ivattin vargu nin message ge antu naanyavattu late reply madilla, yene work irli 
      neen ping madudre naan reply madtini, i always love you to the core. Read well,get good marks, get a good package and make your parents proud.<br></br> 
      Your Brother 
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
