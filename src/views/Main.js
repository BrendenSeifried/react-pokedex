import { useEffect, useState } from 'react';
import TypeSelection from '../components/TypeSelection';
import { fetchByType, fetchPokemon, fetchType } from '../services/pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState('');
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
    const grabType = async () => { 
        
      const triana = await fetchByType(selectedType);
      setSelectedType(triana);
    };

    grabType();  
  }, [selectedType]);


  return (
    <div>
      <div>
        <TypeSelection types={types} setTypes={setTypes}/>
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
