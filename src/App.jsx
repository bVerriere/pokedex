import { useEffect, useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from './components/PokemonCard';
import Navbar from './components/Navbar';

function App() {
  
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
  
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // useEffect(() => {
  //   alert("hello pokemon trainer :)")
  // },[])

  useEffect(() => {
    if(pokemonIndex === 3){
        alert("pika pikachu !!!")
    }
  })
  
  return (
    <div>
      <MyTitle />
      <div>
        {/* <PokemonCard pokemon={pokemonList[pokemonIndex]}/> */}
      </div>
      <div>
        <Navbar pokemonList={pokemonList} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex}/>
      </div>
    </div>
  );
}

export default App;