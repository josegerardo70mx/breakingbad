import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/character/random")
      .then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  // 1. Crear un estado
  // 2. useEffect (con el arreglo de dependencias)
  // 3. Ejecutar axios
  // 4. Hacer console.log de la respuesta

  return (
    <div className="App">
      <h1>{character[0]?.name}</h1>
      <img src={character[0]?.img} alt="" />
    </div>
  );
}

export default App;
