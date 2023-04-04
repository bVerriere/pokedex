const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

function PokemonCard() {
    const pokemon = pokemonList[0];
    //console.log(pokemon)
    return (
        <div>
            <h2>{pokemon.name}</h2>
            {pokemon.Src = "undefined" ? <img src={pokemon.imgSrc}></img> : <p></p>}
        </div>
    );
}

export default PokemonCard;