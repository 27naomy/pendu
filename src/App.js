// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
// import "./Clavier.jsx";

function App() {
  const liste = [
    "tableau",
    "biscuit",
    "exorciste",
    "satan",
    "hortensia",
    "joker",
    "chauve",
    "supermarche",
    "jacinth",
    "cimetiere",
    "papillon",
    "accouchement",
    "baraquement",
    "parking",
    "grenouille",
    "saucisson",
    "table",
    "zebre",
    "yaourt",
    "yoyo",
    "outils",
    "hazbin",
  ];
  const [randomWord, setRandomWord] = useState(
    liste[Math.ceil(Math.random() * liste.length - 1)] // choisi un mot aléoire dans la liste de mot
  );

  const [maskedWord, setMaskedWord] = useState("");

  const setinitialMaskedWord = () => {
    let newMaskedWord = "";
    for (let i = 0; i < randomWord.length; i++) {
      newMaskedWord += "*";
    }
    setMaskedWord(newMaskedWord);
  };

  useEffect(() => {
    console.log("====================================");
    console.log(randomWord);
    console.log("====================================");
    return setinitialMaskedWord();
  }, [randomWord]);

  return (
    <main>
      <p>{maskedWord}</p>
      <div className="btn-clavier">
        <button
          className="btn-keya"
          onClick={(a) => {
            a.target.disabled = true;
          }}
        >
          a
        </button>
        <button
          className="btn-keyb"
          onClick={(b) => {
            b.target.disabled = true;
          }}
        >
          b
        </button>
        <button
          className="btn-keyc"
          onClick={(c) => {
            c.target.disabled = true;
          }}
        >
          c
        </button>
        <button
          className="btn-keyd"
          onClick={(d) => {
            d.target.disabled = true;
          }}
        >
          d
        </button>
        <button
          className="btn-keye"
          onClick={(e) => {
            e.target.disabled = true;
          }}
        >
          e
        </button>
        <button
          className="btn-keyf"
          onClick={(f) => {
            f.target.disabled = true;
          }}
        >
          f
        </button>
        <button
          className="btn-keyg"
          onClick={(g) => {
            g.target.disabled = true;
          }}
        >
          g
        </button>
        <button
          className="btn-keyh"
          onClick={(h) => {
            h.target.disabled = true;
          }}
        >
          h
        </button>
        <button
          className="btn-keyi"
          onClick={(i) => {
            i.target.disabled = true;
          }}
        >
          i
        </button>
        <button
          className="btn-keyj"
          onClick={(j) => {
            j.target.disabled = true;
          }}
        >
          j
        </button>
        <button
          className="btn-keyk"
          onClick={(k) => {
            k.target.disabled = true;
          }}
        >
          k
        </button>
        <button
          className="btn-keyl"
          onClick={(l) => {
            l.target.disabled = true;
          }}
        >
          l
        </button>
        <button
          className="btn-keym"
          onClick={(m) => {
            m.target.disabled = true;
          }}
        >
          m
        </button>
        <button
          className="btn-keyn"
          onClick={(n) => {
            n.target.disabled = true;
          }}
        >
          n
        </button>
        <button
          className="btn-keyo"
          onClick={(o) => {
            o.target.disabled = true;
          }}
        >
          o
        </button>
        <button
          className="btn-keyp"
          onClick={(p) => {
            p.target.disabled = true;
          }}
        >
          p
        </button>
        <button
          className="btn-keyk"
          onClick={(q) => {
            q.target.disabled = true;
          }}
        >
          q
        </button>
        <button
          className="btn-keyr"
          onClick={(r) => {
            r.target.disabled = true;
          }}
        >
          r
        </button>
        <button
          className="btn-keys"
          onClick={(s) => {
            s.target.disabled = true;
          }}
        >
          s
        </button>
        <button
          className="btn-keyt"
          onClick={(t) => {
            t.target.disabled = true;
          }}
        >
          t
        </button>
        <button
          className="btn-keyu"
          onClick={(u) => {
            u.target.disabled = true;
          }}
        >
          u
        </button>
        <button
          className="btn-keyw"
          onClick={(w) => {
            w.target.disabled = true;
          }}
        >
          w
        </button>
        <button
          className="btn-keyx"
          onClick={(x) => {
            x.target.disabled = true;
          }}
        >
          x
        </button>
        <button
          className="btn-keyy"
          onClick={(y) => {
            y.target.disabled = true;
          }}
        >
          y
        </button>
        <button
          className="btn-keyz"
          onClick={(z) => {
            z.target.disabled = true;
          }}
        >
          z
        </button>
      </div>
    </main>
  );
}

export default App;
