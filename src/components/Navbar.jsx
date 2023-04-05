import { useState } from 'react'

function Navbar({pokemonList, pokemonIndex, setPokemonIndex}) {
    console.log(pokemonIndex)
    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1)
      }
      const handleClickPrev = () => {
        setPokemonIndex(pokemonIndex - 1)
      }
    return(
        <div>
            {pokemonIndex > 0 ? <button onClick={handleClickPrev}>Précédent</button> : null}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Suivant</button> : null}
        </div>
    )
}
export default Navbar;