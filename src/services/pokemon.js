

export async function fetchPokemon() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=10');
  const pokeInfo = await response.json();
  return pokeInfo.results; 
}

export async function fetchType() {

  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const allPokemonTypes = await response.json();
  return allPokemonTypes.map((item) => item.type);

}

export async function fetchByType(type, search) {
  const response = new URLSearchParams();

  if (type !== 'All') {
    response.set('type', type);
  }
  if (search) {
    response.set('pokemon', search);
  }

  const elementTypes = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${response.toString()}&perPage=10`);
  const elementInfo = await elementTypes.json();
  return elementInfo.results;
}
