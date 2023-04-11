import { useEffect, useState } from 'react'

function Navbar({pokemonList, pokemonIndex, setPokemonIndex}) {
    //console.log(pokemonIndex)
    // const handleClickNext = () => {
    //     setPokemonIndex(pokemonIndex + 1)
    //   }
    //   const handleClickPrev = () => {
    //     setPokemonIndex(pokemonIndex - 1)
    //   }

    return(
        // <div>
        //     <button style={{backgroundColor: "white"}}>
        //         {pokemonList.map((pokemon) => {
        //             <li> key={pokemon.name}
        //                 {pokemon.name}
        //             </li>
        //         })}
        //     </button>
        // </div>
        <ul>
            {pokemonList.map((pokemon) => {
                return <button style={{backgroundColor: "white", color: "black"}} key={pokemon.name}>
                    {pokemon.name}
                </button>
            })}
        </ul>
    )
}
export default Navbar;