//Search in each List

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styled from "styled-components"

// export default function SearchForm() {

//   const Card = styled.div`
//   width: 500px;
//   height: 600px;
//   margin: 0 auto;
//   margin-top: 10px;
//   background: #fff;
//   border: 2px solid gray;
//   display: flex;
//   flex-wrap: wrap;
//   border-radius: 15px 40px;
//   justify-content: space-between;
//   `;
  
//   const Columns = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 10px;
//   `;
  
//   const PicBox = styled.div`
//   width: 200px;
//   height: 200px;
//   padding: 10px;
//   border-radius: 15px 30px;
//   `;
//   const img = styled.div`
//   width: 80%
//   height: 80%
//   `;
  
//   const Font = styled.div`
//   font-size: ${props =>(props.primary ? `2rem` : `1.0rem`)};
//   color: #black;
//   display: flex;
//   align-items: center;
//   padding-bottom: ${props =>(props.primary ? `30px` : `20px`)};
//   `;

//   const [data, setData] = useState([]);
//   const [query, setQuery] = useState("");
//   useEffect(() => {
//     axios
//       .get(`https://rickandmortyapi.com/api/character`)
//       .then(response => {
//         const characters = response.data.results.filter(character =>
//           character.name.toLowerCase().includes(query.toLowerCase())
//         );
//         setData(characters);
//       });
//   }, [query]);
  
//   const handleInputChange = event => {
//     setQuery(event.target.value);
//   };
//   return (
//     <div>
//       <form className="search">
//         <input
//           type="text"
//           onChange={handleInputChange}
//           value={query}
//           name="name"
//           tabIndex="0"
//           placeholder="search by name"
//         />
//       </form>
//         {data.map(character => {
//           return (
//             <Card>
//             <Columns>
//                 <Font primary>{character.name}</Font>
//                 <PicBox>Image: <img alt="" src={character.image} /></PicBox> 
//             </Columns>
//             <Columns>
//                 <Font>Species: {character.species}</Font>
//                 <Font>Status: {character.status}</Font>
//             </Columns>
//         </Card>
            
//           )
//         }
//         )}
//       </div>
//   )
// }