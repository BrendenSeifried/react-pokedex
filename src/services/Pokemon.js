// import React from 'react';

export async function fetchPokemon() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');

  const stuff = await response.json();
  console.log(stuff.results);
  return stuff.results; 
}
