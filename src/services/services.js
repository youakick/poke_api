const useFetchData = () => {
    const number = Math.floor(Math.random() * (99 - 0) + 0)

    const dataOfSelectedPokemon = async (func, id) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(resp => resp.json())
            return func(response)
        } catch (e) {
            console.log(e)
        }

    }

    const randomPokemonData = async (func) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
                .then(resp => resp.json())
            return func(response)
        } catch (e) {
            console.log(e)
        }
    }

    const pokemonListData = async (func, offset) => {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`)
                .then(response => response.json())
                .then(data => {
                    const requests = data.results.map(pokemon => fetch(pokemon.url).then(response => response.json()));
                    Promise.all(requests)
                    .then(pokemonData => {
                        func(pokemonData);
                    })
                    .catch(error => {
                        console.error('Error fetching Pokemon data:', error);
                    });
                })
                .catch(error => {
                    console.error('Error fetching Pokemon list:', error);
                });
    }

    return {randomPokemonData,
            pokemonListData,
            dataOfSelectedPokemon
            }
}


export default useFetchData;