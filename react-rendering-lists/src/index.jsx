import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokemonList(props) {
  const pokemon = props.pokemon;
  const listItems = pokemon.map(curPokemon =>
  <li key={curPokemon.number}>
    {curPokemon.name}
  </li>);
  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(
  <PokemonList pokemon={pokedex} />,
  document.getElementById('root')
);
