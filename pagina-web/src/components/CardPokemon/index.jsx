import { useState, useEffect } from "react";
import "./styles.css";
import { POKEMON_URL } from "../../Constantes";

export const CardPokemon = ({ name, id }) => {
  const [pokemon, setPokemon] = useState({
    moves: [],
    sprites: { other: { dream_world: { front_default: "" } } },
  });

  const { moves, sprites } = pokemon;
  const movesToShow = moves.slice(0, 3); // Obtener solo los dos primeros movimientos

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await fetch(`${POKEMON_URL}${id}/`);
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemon();
  }, [id]); //ejemplo al hacer un buscador indicamos que ese valor cambia y debemos renderizar de nuevo

  // condicional ternaria -> Candicion ? primera opcion : segunda opcion

  return (
    //Renderizado condicional
    <>
      {id ? (
        <div className="card-pokemon">
          <div className="card-pokemon-img-container">
            <figure>
              <img
                className="img-pokemon"
                src={sprites?.other?.dream_world?.front_default}
                alt={name}
              />
            </figure>
          </div>
          <div className="card-pokemon-descriptiom">
            <h3>{name}</h3>
            <h4>Movimientos:</h4>
            <ul>
              {movesToShow?.map((move, index) => (
                <li key={index}>{move.move.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

//      img: sprites.other.dream_world.front_default,
