import { useEffect, useState } from 'react';
import TypeSelection from '../components/TypeSelection';
import { fetchByType, fetchPokemon, fetchType } from '../services/pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState('bug');
  const [types, setTypes] = useState([]);


  useEffect(() => {
    const allPokemon = async () => {
      const everyPokemon = await fetchPokemon();
      setPokemon(everyPokemon);


      // const pokeTypes = await fetchType();
      // setTypes(pokeTypes);
      const pokeTypes = await fetchType();
      setTypes(['all', ...pokeTypes]);
    };
    
    allPokemon();
  }, []);

  useEffect(() => {
    const userType = async () => { 
    
      const matchingPokemon = await fetchByType(selectedType);
      setPokemon(matchingPokemon);
    };
    if (selectedType) {
      userType();
    }

  }, [selectedType]);


  return (
    <div>
      <div>
        <TypeSelection types={types} setSelectedType={setSelectedType}/>
      </div>
      <div>
        {pokemon.map((grab) => (
          <div key={grab.id}> 
            <h3>{grab.pokemon}</h3>
            <p>Hidden ability: ({grab.ability_hidden}) Speed: ({grab.speed}) Attack: ({grab.attack}) Defense: ({grab.defense})</p>
          </div>

        ))}
        
      </div> 
    </div>
  );
}
