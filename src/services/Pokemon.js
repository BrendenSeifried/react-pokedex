// import React from 'react';

export async function fetchPokemon() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');

  const pokeInfo = await response.json();
  // console.log(stuff.results);
  return pokeInfo.results; 
}

export async function fetchType() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');

  const allPokemonTypes = await response.json();
  // console.log(types);
  return allPokemonTypes;
}

export async function fetchByType(type) {
  const response = new URLSearchParams();
  response.set('type', type);
  console.log(type); 
  const elementTypes = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${response.toString()}`);

  const elementInfo = await elementTypes.json();
  // console.log(stuff);
  return elementInfo.results;
}
