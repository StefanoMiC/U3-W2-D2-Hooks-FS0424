// 2 regole fondamentali per gli Hooks:
// 1) Gli Hooks possono essere utilizzati SOLO all'interno dei componenti a funzione
// 2) Bisogna utilizzare gli Hooks SEMPRE in modo esplicito all'interno del componente, prima del return.
// MAI dentro a condizionali, cicli, blocchi intermedi... devono essere dichiarati nel contesto principale della funzione.

import { useEffect, useState } from "react";

const EffectsExample = () => {
  const [counter, setCounter] = useState(0); // [0, f () {}]
  const [name, setName] = useState("non settato"); // ["non settato", f () {}]

  // useEffect a seconda di come lo si utilizzi, imita il comportamento di: componentDidMount, componentDidUpdate, componentWillUnmount
  // useEffect vuole una callback function come argomento, ha un secondo parametro opzionale

  // questo tipo di useEffect lo definiamo "senza freni", si attiva sia al caricamento come un componentDidMount,
  // sia ad ogni cambio di stato come un componentDidUpdate
  // useEffect(() => {
  //   console.log("useEffect senza freni, lo vediamo sempre");
  // });

  // il secondo parametro dello useEffect ci permette di stabilire meglio la funzionalità, con quale ciclo di vita vogliamo sincronizzarci?
  // per un componentDidMount, ci servirà di specificare come secondo argomento dello useEffect un array vuoto!
  useEffect(() => {
    console.log("useEffect come componentDidMount");
  }, []);

  // il secondo parametro si definisce un array di dependency (dipendenze), stabilisce quale valore scatenerà una riesecuzione del metodo
  // come componentDidUpdate, con la differenza che questo si esegue ANCHE una volta all'avvio,
  // se vogliamo evitarlo dobbiamo prevedere una condinzione che ne blocchi l'esecuzione
  useEffect(() => {
    if (counter > 0) {
      // questo if fa in modo che al primo avvio (al componentDidMount) questo codice non venga eseguito,
      // ma verrà eseguito dopo OGNI cambiamento del valore della dipendenza: counter
      // facendo quindi le veci di un componentDidUpdate
      console.log("useEffect come componentDidUpdate con dipendenza counter");
    }
  }, [counter]);

  useEffect(() => {
    if (name !== "non settato") {
      console.log("useEffect come componentDidUpdate con dipendenza name");
    }
  }, [name]);

  // uno useEffect può controllare anche più di una dipendenza, e scatterà quando una di queste subirà un aggiornamento
  useEffect(() => {
    if (counter > 0 || name !== "non settato") {
      console.log("useEffect come componentDidUpdate con dipendenza sia counter che name");
    }
  }, [name, counter]);

  // componentWillUnmount:
  useEffect(() => {
    // il return all'interno della callbeck dello useEffect sarà una funzione chiamata poco prima della "morte del componente"
    // fa quindi le veci di un componentWillUnmount, utile per chiudere sessioni di connessioni attive (es. sockets, chat), oppure intervalli ecc...
    return () => console.log("bye bye");
  }, []);

  return (
    <div className="text-center mt-5">
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+ 1</button>

      <hr />
      <p
        onClick={() => {
          setName("Stefano");
        }}
      >
        {name}
      </p>
    </div>
  );
};
export default EffectsExample;
