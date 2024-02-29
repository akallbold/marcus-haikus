import { useState, useEffect } from "react";
import { lineGenerator } from "./data/utils";
import useIsMobile from "./hooks/useMobile";
import './App.css'; 

const emptyHaiku = {
  lineOne: "",
  lineTwo: "",
  lineThree: "",
};

const MarcusHaikuMain = () => {
  const [haiku, setHaiku] = useState(emptyHaiku);
  useEffect(() => haikuGenerator(), []);
  const isMobile = useIsMobile();

  const haikuGenerator = () => {
    let currentHaiku = emptyHaiku;
    currentHaiku.lineOne = lineGenerator(5);
    currentHaiku.lineTwo = lineGenerator(7);
    currentHaiku.lineThree = lineGenerator(5);
    setHaiku({ ...currentHaiku });
  };

  return (
    <div className="background-pan">
    <div className="text-center text-white z-10">
      <h1 className="spacing-p-b">Meditations Haiku Generator</h1>
      <div className="spacing-p-b">
        <h2 className="">
          {haiku.lineOne}<br />
          {haiku.lineTwo}<br />
          {haiku.lineThree}
        </h2>
      </div>
      <button 
        onClick={haikuGenerator} 
        className="button">
        Generate New Haiku
      </button>
    </div>
  </div>
  
  );
};

export default MarcusHaikuMain;
