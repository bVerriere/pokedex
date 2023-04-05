import { useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from './components/PokemonCard';



const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPlus = () => {
    setPokemonIndex(pokemonIndex + 1)
    //console.log(pokemonIndex)
  }
  const handleClickMoins = () => {
    setPokemonIndex(pokemonIndex - 1)
    //console.log(pokemonIndex)
  }
  return (
    <div>
      <MyTitle />
      <div>
        <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
      </div>
      {pokemonIndex > 0 ?<button onClick={handleClickMoins}>Précédent</button> : <></>}
      {pokemonIndex < pokemonList.length - 1 ?<button onClick={handleClickPlus}>Suivant</button> : <></>}
    </div>
  );
}

export default App;