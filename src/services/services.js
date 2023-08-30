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

    const randomPokemonData = async (func, numb = number) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numb}/`)
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

    const pokemonFromInput = async (func, text, error) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}/`)
                .then(resp => resp.json())
            return func(response)
        } catch (e) {
            error(e)
        }
    }

    const pokeItems = async (number, func) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/item/${number}`)
                .then(resp => resp.json())
            return func(response)
        } catch (e) {
            console.log(e)
        }
    }

    const locations = async (number, func) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/location/${number}`)
                .then(resp => resp.json())
            return func(response)
        } catch (e) {
            console.log(e)
        }
    }

    return {randomPokemonData,
            pokemonListData,
            dataOfSelectedPokemon,
            pokemonFromInput,
            pokeItems,
            locations
            }
}


export default useFetchData;