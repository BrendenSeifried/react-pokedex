import { useEffect, useState } from 'react';
import TypeSelection from '../components/TypeSelection';
import { fetchByType, fetchPokemon, fetchType } from '../services/pokemon';
import Search from '../components/Search';
import './Main.css';
import Order from '../components/Order';
import Perpage from '../components/Perpage';


export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState('');
  const [load, setLoad] = useState(true);
  const [order, setOrder] = useState('asc');
  const [perPage, setPerPage] = useState('');
  const [pageClick, setPageClick] = useState('10');
  

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
  }, [perPage]);

  useEffect(() => {
    const userType = async () => { 
      const matchingPokemon = await fetchByType(selectedType, null, order, pageClick);
      setPokemon(matchingPokemon);
    };
    if (selectedType) {
      userType();
    }
  }, [selectedType, order, pageClick]);

  const searchPokemon = async () => {
    const data = await fetchByType(selectedType, search, null);
    setPokemon(data);
  };

 
  if (load) return <div className='loader'>Loading, please wait.</div>;

  return (
    <>
      <div className='selection'>
        <Order setOrder={setOrder}/>
        <TypeSelection types={types} setSelectedType={setSelectedType}/>
      </div>
      <div className='inputs'>
        <Perpage perPage={perPage} setPerPage={setPerPage} setPageClick={setPageClick}/>
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
