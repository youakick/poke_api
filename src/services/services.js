const useFetchData = () => {
    const number = Math.floor(Math.random() * (99 - 0) + 0)

    const returnedData = async (func) => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0.')
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
            console.log(response)
            return func(response)
        } catch (e) {
            console.log(e)
        }
    }
    return {returnedData,
            randomPokemonData}
}


export default useFetchData;