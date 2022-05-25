import { useState, useEffect } from "react";
import "./App.css";
import {CHARS, RANDOM_WORD} from "./Constants";

function App() {
  const [randomWord, setRandomWord] = useState(RANDOM_WORD);
  const [maskedWord, setMaskedWord] = useState("");
  const [compteurPerdu, setCompteurPerdu] = useState(0);

  const setInitialMaskedWord = () => {
    let newMaskedWord = "";
    for (let i = 0; i < randomWord.length; i++) {
      newMaskedWord += "*";
    }
    setMaskedWord(newMaskedWord);
  };

  const selectCharacter = (selectedChar) => {
    const randomWordArray = Array.from(randomWord);
    let newMaskedWord = maskedWord;

    let isFinded = false
    for(let i = 0; i < randomWordArray.length; i++){ 
        if(selectedChar === randomWordArray[i]){
          isFinded = true
          newMaskedWord = replaceAt(newMaskedWord, i, selectedChar)
        }
    }

    if(!isFinded) {
      setCompteurPerdu(compteurPerdu +1)
    }
    setMaskedWord(newMaskedWord);
    
    checkIfEnd(newMaskedWord)
  }

  const checkIfEnd = (newMaskedWord) => {
    checkSiGangner(newMaskedWord)
    checkSiPerdu()
  }
 
  const checkSiGangner = (newMaskedWord) => {
    if (!newMaskedWord.includes('*')){
      disabledAllBtn()
      showWon()
    }
  }

  const checkSiPerdu = () => {
    if (compteurPerdu === 4){
      disabledAllBtn()
      showPerdu()
    }
  }

  const replaceAt = (wordAModifier, index, lettre) => {
    return wordAModifier.substring(0, index) + lettre + wordAModifier.substring(index + lettre.length);
  }

  const disabledAllBtn = ()=>{
    const elements = document.getElementsByClassName('btn-keya');
      [].forEach.call(elements, function (element) {element.disabled = true});
  }

  const showWon = ()=>{
    var elementGagner = document.getElementById("gagner");
    elementGagner.classList.remove("hide");
  }

  const showPerdu = ()=>{
    var elementGagner = document.getElementById("perdre");
    elementGagner.classList.remove("hide");
  }

  useEffect(() => {
    console.log("====================================");
    console.log(randomWord);
    console.log("====================================");
    return setInitialMaskedWord();
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
                          selectCharacter(myChar)
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
