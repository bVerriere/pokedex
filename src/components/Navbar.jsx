import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';

function Navbar({pokemonList, pokemonIndex, setPokemonIndex}) {
    //console.log(pokemonIndex)
    // const handleClickNext = () => {
    //     setPokemonIndex(pokemonIndex + 1)
    //   }
    //   const handleClickPrev = () => {
    //     setPokemonIndex(pokemonIndex - 1)
    //   }

    return(
        <ul>
            {pokemonList.map((pokemon, index) => {
                return <button 
                style={{backgroundColor: "white", color: "black"}} 
                key={pokemon.name}
                onClick={() => setPokemonIndex(pokemonIndex = index)}>
                    {pokemon.name}
                </button>
            })}
        </ul>
    )
}
export default Navbar;