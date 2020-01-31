import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect


  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode`)
      .then(response => {
        const episodes = response.data.results.filter(episode =>
          episode.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(episodes);
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
        {data.map(episode => {
          return (
            <EpisodeCard
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
          />
            
          )
        }
      )}
    </div>
  )
}