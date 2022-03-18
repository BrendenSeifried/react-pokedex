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
  const [perPage, setPerPage] = useState('10');
  const [pageClick, setPageClick] = useState('');
  

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
  }, []);

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
    <div className='all-stats'>
      <div>
        <Perpage perPage={perPage} setPerPage={setPerPage} setPageClick={setPageClick}/>
        <Order setOrder={setOrder}/>
        <Search cue={search} setCue={setSearch} callback={searchPokemon}/>
        <TypeSelection types={types} setSelectedType={setSelectedType}/>
      </div>
      <div>
        {pokemon.map((grab) => (
          <div className='stats' key={grab.id}> 
            <h3>{grab.pokemon}</h3>
            <img src={grab.url_image}></img>
            <p>HP: {grab.hp} Hidden ability: ({grab.ability_hidden}) Speed: ({grab.speed}) Attack: ({grab.attack}) Defense: ({grab.defense})</p>
          </div>
        ))}
      </div> 
    </div>
  );
}
