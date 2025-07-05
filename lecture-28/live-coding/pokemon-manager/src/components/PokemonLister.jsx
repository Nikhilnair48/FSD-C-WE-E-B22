import { useEffect, useState } from "react";

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
                setPokemonList(pokemons);
            } catch(error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPokemon();
    })

    console.log(pokemonList);

    return (
        <div className="pokedex-container">
            <h1>Pokemon Lister</h1>
            <div className="pokemon-grid">
            </div>

        </div>
    )
}

export default PokemonLister;