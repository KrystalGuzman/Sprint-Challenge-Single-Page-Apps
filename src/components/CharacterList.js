import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect


  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(response =>{
      console.log(response.data);
      const results = response.data.results;
      const charactersApi = setCharacter(results);
      console.log(charactersApi);
    })
    .catch(error =>{
      console.log("error:", error);
    })
  }, []);

  return (
    <section className="character-list">
      {character.map(character =>{
        return(
          <CharacterCard
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
          />
        )
      })}
    </section>
  );
}
