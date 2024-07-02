// 2 regole fondamentali per gli Hooks:
// 1) Gli Hooks possono essere utilizzati SOLO all'interno dei componenti a funzione
// 2) Bisogna utilizzare gli Hooks SEMPRE in modo esplicito all'interno del componente, prima del return.
// MAI dentro a condizionali, cicli, blocchi intermedi... devono essere dichiarati nel contesto principale della funzione.

import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

const StateExample = () => {
  // state = {
  //    name: "non settato"
  //    counter: 0
  // }

  //   const state = useState(0); // [0, f () {}]

  //   const counter = state[0];
  //   const setCounter = state[1];

  // se vogliamo un valore iniziale per il nostro stato dobbiamo metterlo tra le parentesi di useState, altrimenti il valore sarà undefined
  // la funzione nella seconda posizione dell'array è quella che ci permetterà di modificare lo stato nel tempo,
  // ancora una volta non siamo liberi di mutare lo stato direttamente
  // la funzione oltre a permettere la modifica dello stato si preoccuperà anche di far aggiornare il componente (nuovo render)
  // l'interfaccia quindi rifletterà il nuovo valore di stato

  const [counter, setCounter] = useState(0); // [0, f () {}]
  const [name, setName] = useState("non settato"); // ["non settato", f () {}]
  const [comments, setComments] = useState([]); // [[], f () {}]

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

      <hr />
      <Button onClick={() => setComments([...comments, { text: "best restaurant in town!" }])}>Add Comment</Button>
      <ListGroup
        onClick={() => {
          setComments(comments.slice(0, -1));
        }}
      >
        {comments.map((comment, index) => (
          <ListGroup.Item key={index}>{comment.text}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default StateExample;
