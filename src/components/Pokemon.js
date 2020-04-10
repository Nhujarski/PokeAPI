import React, {  useState } from 'react';

function Pokemon() {
  const [pokemons,setPokemons] = useState([]); 

   function getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return setPokemons(response.json(response.result));
        }).then(response => {
            console.log(response.results);
        }).catch(err=>{
            console.log(err);
        });
   }
  

  return (
      <>
       <button onClick={getPokemon}>Fetch Pokémon!</button>
        
          {pokemons.map((pokemon,i) => (
              <div key={i}>
              <ul>
                <li>{pokemon.name}</li>
              </ul>
            </div>
          ))}
        
      </>
  )
}


export default Pokemon