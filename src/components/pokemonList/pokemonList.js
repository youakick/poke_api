import { useEffect, useState } from 'react';
import React from 'react';
import useFetchData from '../../services/services';
import { v4 as uuidv4 } from 'uuid'
import '../pokemonList/pokemonList.css'

const PokemonList = () => {
    const [data, setData] = useState(null)
    const {pokemonListData} = useFetchData()

    useEffect(() => {
        pokemonListData(setData)
    }, [])

    console.log(data)

    return (
        <div>
            {data === null ? <div>Loading...</div> : <div className='pokemons-list'>
                {data.map((elem) => {
                    return <div key={uuidv4()} className='pokemons-list-items'>
                            <img src={elem.sprites.front_default} alt={elem.id}/>
                            <div>{elem.name}</div>
                        </div>
                })}
                </div>}
        </div>
    );
};

export default PokemonList;