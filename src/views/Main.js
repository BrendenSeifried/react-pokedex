import { useEffect } from 'react';
import { fetchPokemon } from '../services/Pokemon';

export default function Main() {
  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <div>Main</div>
  );
}
