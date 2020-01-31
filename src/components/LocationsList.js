import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard"

export default function LocationsList() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location`)
      .then(response => {
        const locations = response.data.results.filter(location =>
          location.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(locations);
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
        {data.map(location => {
          return (
            <LocationCard
            name={location.name}
            type={location.type}
            dimension={location.dimension}
          />
            
          )
        }
      )}
    </div>
  )
}