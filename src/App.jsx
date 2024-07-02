import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import StateExample from "./components/StateExample";
import EffectsExample from "./components/EffectsExample";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {/* <StateExample /> */}
      {toggle && <EffectsExample />}

      <Button variant="info" className="d-block mx-auto" onClick={() => setToggle(!toggle)}>
        {toggle ? "Smonta" : "Monta"} Componente
      </Button>
    </>
  );
}

export default App;
