import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {


  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      });
  }, [query]);
  
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          placeholder="search by name"
        />
      </form>
        {data.map(character => {
          return (
            <CharacterCard
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
          />
            
          )
        }
        )}
      </div>
  )
}