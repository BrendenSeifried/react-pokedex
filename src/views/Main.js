import { useEffect, useState } from 'react';
import TypeSelection from '../components/TypeSelection';
import { fetchPokemon, fetchType } from '../services/pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('');
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const grabbinThings = async () => {
      const stuff = await fetchPokemon();
      setPokemon(stuff);


      const stuff2 = await fetchType();
      setTypes(stuff2);
    };
    
    grabbinThings();
  }, []);

  useEffect(() => {
    console.log(type);
      
  }, [type]);


  return (
    <div>
      <div>
        <TypeSelection types={types} setType={setType}/>
      </div>
      <div>
        {pokemon.map((grab) => (
          <div key={grab.id}> 
            <h3>{grab.pokemon}</h3>
            <p>({grab.ability_hidden}) ({grab.speed}) ({grab.attack}) ({grab.defense})</p>
          </div>

        ))}
        
      </div> 
    </div>
  );
}
