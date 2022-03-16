import { useEffect, useState } from 'react';
import { fetchPokemon, fetchType } from '../services/pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [type, getType] = useState([]);
  useEffect(() => {
    const grabbinThings = async () => {
      const stuff = await fetchPokemon();
      setPokemon(stuff);


      const stuff2 = await fetchType();
      getType(stuff2);
    };
    
    grabbinThings();
  }, []);
  return (
    <div>
      {pokemon.map((grab) => (
        <div key={grab.id}> 
          <h3>{grab.pokemon}</h3>
          <p>({grab.ability_hidden}) ({grab.speed}) ({grab.attack}) ({grab.defense})</p>
        </div>

      ))}
        
    </div> 
  );
}
