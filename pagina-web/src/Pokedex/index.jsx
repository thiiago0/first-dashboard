import { useState, useEffect } from "react";
import { API_URL } from "../Constantes";
import { CardPokemon } from "../components/CardPokemon";
import "./styles.css";

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  // const [pokeId, setPokeId] = useState();

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setPokemons(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemons();
  }, []); //cuando este arreglo esta vacio quiere decir que solo se ejecute al inicio de la aplicacion

  // const handleChangeId = (e) => {
  //   setPokeId(e.target.value);
  // };

  return (
    <div className="pokedex-container">
      <h1 className="animate__animated animate__bounceInRight">POKEDEX</h1>
      {/* <input
        type="text"
        placeholder="Buscar por id"
        value={pokeId}
        onChange={handleChangeId}
      /> */}
      <div className="pokemons-container">
        {pokemons.map(({ name }, i) => (
          <CardPokemon key={name} id={i + 1} name={name} />
        ))}
      </div>
    </div>
  );
};
