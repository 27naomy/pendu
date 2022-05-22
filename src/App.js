import { useState, useEffect } from "react";
import "./App.css";
import {CHARS, RANDOM_WORD} from "./Constants";

function App() {
  const [randomWord, setRandomWord] = useState(RANDOM_WORD);

  const [maskedWord, setMaskedWord] = useState("");

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

    for(let i = 0; i < randomWordArray.length; i++){ 
        if(selectedChar === randomWordArray[i]){
          newMaskedWord = replaceAt(newMaskedWord, i, selectedChar)
        }
    }

    if (!newMaskedWord.includes('*')){
      disabledAllBtn()
      showWon()
    }

    setMaskedWord(newMaskedWord);
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
