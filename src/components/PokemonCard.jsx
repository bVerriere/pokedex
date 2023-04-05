import PropTypes from "prop-types";

function PokemonCard(props) {
    return (
        <div>
            <h2>{props.pokemon.name}</h2>
            {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc}></img> : <p></p>}
        </div>
    );
}

PokemonCard.propTypes = { 
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,

  }

export default PokemonCard;