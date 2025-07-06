import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import HelloWorld from "../a/HelloWorld";

/*
    
    Calling an API: https://pokeapi.co/api/v2/pokemon?limit=20
    // Resource I want to retrieve is "pokemon"
    // Path parameter: /api/v2/pokemon
    // Query paramters allows us to passs a number of 
    // "arguments" to your API
    // In this case, limit is a key for the query parameter
    // the value is a number, which limits the number of 
    // pokemons returned by the API
    Store the results in our component (hint: state)
    
    API calls are async events; they can take a noticeable time to 
    resolve to a value; we should inform the user that we are performing
    an async operation
    We need state to manage loading, error


    Lifecycle methods in class based component
        - componentDidMount
    In function component, we handle componentDidMount w/ useEffect hook

    CRUD
*/
function PokemonLister() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
                // HTTP status for OK: 200, 201
                // NOT OK: 400 (Bad Request), 401 (Unauthoized)
                if(!response.ok) {
                    throw new Error("Failed to fetch Pokemon list");
                }
                const pokemons = await response.json();
                /* count: number, next: string, results: array of objects */
                setPokemonList(pokemons.results);
            } catch(error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPokemon();
    }, [])

    const filteredPokemon = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleAddToFavorites = (pokemonToAdd) => {
        // if the pokemonToAdd object does not exist
        // in current favorites state
        // then, add it. Reason: to eliminate duplicates
        const existingFavorite = favorites.find(p => p.name === pokemonToAdd.name);
        if(existingFavorite === undefined) {
            setFavorites([...favorites, pokemonToAdd]);
        }
        // alternative to above
        /*
            if(!favorites.find(p => p.name === pokemonToAdd.name)) {
                setFavorites([...favorites, pokemonToAdd]);
            }
        */
    }

    if(isLoading) {
        return <div className="loading">Catching them all...</div>;
    }
    
    if(error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="pokedex-container">
            <h1>Pokemon Lister</h1>
            
            <div className="favorites-section">
                <h2>Favorites ({favorites.length})</h2>
                <div className="favorites-list">
                    {
                        favorites.map(fav => (
                            <span key={fav.name} className="favorite-chip">{fav.name},</span>
                        ))
                    }
                </div>
            </div>
            
            <input
                type="text"
                className="search-bar"
                value={searchTerm}
                onChange={e => {
                    console.log(e);
                    setSearchTerm(e.target.value)
                }}
            />
            <div className="pokemon-grid">
                {
                    filteredPokemon.map(pokemon => {
                        return (
                            <PokemonCard
                                key={pokemon.name}
                                pokemon={pokemon}
                                onFavorite={handleAddToFavorites}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default PokemonLister;