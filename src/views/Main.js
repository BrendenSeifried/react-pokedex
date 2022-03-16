import { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/Pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    const grabbinThings = async () => {
      const stuff = await fetchPokemon();
      setPokemon(stuff);
    };
    grabbinThings();
  }, []);
  return (
    <div>Main
      {pokemon.map((grab) => (
        <div key={grab.id}> 
          <h3>{grab.pokemon}</h3>
          <p>({grab.ability_hidden}) ({grab.speed}) ({grab.attack}) ({grab.defense})</p>
        </div>

      ))}
        
    </div> 
  );
}
