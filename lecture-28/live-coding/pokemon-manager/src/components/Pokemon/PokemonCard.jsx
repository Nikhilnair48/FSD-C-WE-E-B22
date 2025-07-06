function PokemonCard(props) {
    const { pokemon, onFavorite } = props;
    return (
        <div className="pokemon-card">
            <span className="pokemon-name">{pokemon.name}</span>
            <button
                className="favorite-button"
                onClick={() => onFavorite(pokemon)}>
                ★
            </button>
        </div>
    )
}

export default PokemonCard;