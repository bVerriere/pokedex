

function PokemonCard(props) {
    return (
        <div>
            <h2>{props.pokemon.name}</h2>
            {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc}></img> : <p></p>}
        </div>
    );
}

export default PokemonCard;