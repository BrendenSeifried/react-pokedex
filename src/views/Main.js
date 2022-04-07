import { useEffect } from 'react';
import TypeSelection from '../components/TypeSelection';
import { fetchByType, fetchPokemon, fetchType } from '../services/pokemon';
import Search from '../components/Search';
import './Main.css';
import Order from '../components/Order';

import { usePokeContex } from '../context/PokeContext';


export default function Main() {


  const { selectedType, pokemon, setPokemon, search, setSearch, order, setTypes, load, setLoad } = usePokeContex();
  

  useEffect(() => {
    const allPokemon = async () => {
      const everyPokemon = await fetchPokemon();
      setPokemon(everyPokemon);
      const pokeTypes = await fetchType();
      setTypes(['All', ...pokeTypes]);
      

      setTimeout(() => {
        setLoad(false);
      }, 5000);  
    };
    allPokemon();
  }, [setPokemon, setTypes, setLoad]);

  useEffect(() => {
    const userType = async () => { 
      const matchingPokemon = await fetchByType(selectedType, null, order);
      setPokemon(matchingPokemon);
    };
    if (selectedType) {
      userType();
    }
  }, [selectedType, order, setPokemon]);

  const searchPokemon = async () => {
    const data = await fetchByType(selectedType, search, null);
    setPokemon(data);
  };

 
  if (load) return <div className='loader'>Loading, please wait.</div>;

  return (
    <>
      <div className='selection'>
        <Order />
        <TypeSelection />
      </div>
      <div className='inputs'>
        <Search cue={search} setCue={setSearch} callback={searchPokemon}/>
        
      </div>
      <div className='pokecard'>
        {pokemon.map((grab) => (
          <div className='stats' key={grab.id}> 
            <h3>{grab.pokemon}</h3>
            <img src={grab.url_image}></img>
            <p>HP: {grab.hp} Hidden ability: ({grab.ability_hidden}) Speed: ({grab.speed}) Attack: ({grab.attack}) Defense: ({grab.defense})</p>
          </div>
        ))}
      </div> 
    </>
  );
}
