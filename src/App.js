import { useState, useEffect } from "react";
import "./App.css";
import {CHARS, RANDOM_WORD} from "./Constants";

function App() {
  const [randomWord, setRandomWord] = useState(RANDOM_WORD);
  const [maskedWord, setMaskedWord] = useState("");
  const [cmptClickWaste, setCmptClickWaste] = useState(0);

  // Pour initialiser le mot caché par des *.
  const initMaskedWord = () => {
    let newMaskedWord = "";
    for (let i = 0; i < randomWord.length; i++) {
      newMaskedWord += "*";
    }
    setMaskedWord(newMaskedWord);
  };

  const clicChar = (selected) => {
    const randomWordArray = Array.from(randomWord);
    let newMaskedWord = maskedWord;

    let isFinded = false
    for(let i = 0; i < randomWordArray.length; i++){ 
        if(selected === randomWordArray[i]){
          isFinded = true
          newMaskedWord = replaceAt(newMaskedWord, i, selected)
        }
    }

    if(!isFinded) {
      setCmptClickWaste(cmptClickWaste +1)
    }
    setMaskedWord(newMaskedWord);
    
    checkIfEnd(newMaskedWord)
  }

  // Fonction pour savoir si on a gaggné ou perdu (Fin de partie)
  const checkIfEnd = (newMaskedWord) => {
    checkIfWon(newMaskedWord)
    checkIfWaste()
  }
 
  // Fonction pour savoir si on a gaggné
  const checkIfWon = (newMaskedWord) => {
    if (!newMaskedWord.includes('*')){
      disabledAllBtn()
      showWon()
    }
  }

  // Fonction pour savoir si on a perdu
  const checkIfWaste = () => {
    if (cmptClickWaste === 4){
      disabledAllBtn()
      showWaste()
    }
  }

  // Fonction pour remplacer la lettre de la position dans le motqui est dans toModify
  // Par la lettre qui dans 'lettre'
  const replaceAt = (toModify, position, lettre) => {
    return toModify.substring(0, position) + lettre + toModify.substring(position + lettre.length);
  }

  const disabledAllBtn = ()=>{
    const elements = document.getElementsByClassName('btn-keya');
      [].forEach.call(elements, function (element) {element.disabled = true});
  }


  const showWon = ()=>{
    document.getElementById("gagner").classList.remove("hide");
  }

  const showWaste = ()=>{
    document.getElementById("perdre").classList.remove("hide");
  }

  useEffect(() => {
    console.log("====================================");
    console.log(randomWord);
    console.log("====================================");
    return initMaskedWord();
  }, []);

  return (
    <div>
      <div id="gagner" className="hide">
        <h1>Vous avez gagné ^^ </h1>
      </div>
      <div id="perdre" className="hide">
        <h1>Vous avez perdu !! </h1>
      </div>
      <div id="pendu">
        <p>{maskedWord}</p>
        <div className="btn-clavier">

          {
            CHARS.map ( myChar => {
              return <button
                        key = {myChar}
                        className="btn-keya"
                        onClick={(e) => {
                          e.target.disabled = true
                          clicChar(myChar)
                        }}
                      >
                        {myChar}
                      </button>
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
