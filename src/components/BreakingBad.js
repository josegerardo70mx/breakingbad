import axios from "axios";
import React, { useEffect, useState } from "react";

const BreakingBad = () => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/character/random")
      .then((res) => setCharacter(res.data[0]));
  }, []);

  console.log(character);

  // 1. Crear un estado
  // 2. useEffect (con el arreglo de dependencias)
  // 3. Ejecutar axios
  // 4. Hacer console.log de la respuesta

  return (
    <div className="App">
      <h1>{character.name}</h1>
      <img src={character.img} alt="" />
    </div>
  );
};

export default BreakingBad;
