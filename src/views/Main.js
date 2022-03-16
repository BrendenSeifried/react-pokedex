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
      {pokemon.map((punk) => (
        <h3 key={punk.id}> {punk.pokemon}</h3>
      ))}
        
    </div>
  );
}
