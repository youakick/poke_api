import useFetchData from '../../services/services';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import '../randomPokemon/randomPokemon.css'

import React from 'react';

function RandomPokemon() {
    
    const [data, setData] = useState(null)
    const {randomPokemonData} = useFetchData()

    useEffect(() => {
    randomPokemonData(setData)
    }, [])

    if(data === null) {
        return <div>Loading...</div>
    } else {
        return (
            <div className='random'>
                <div className='photo'> 
                    <img className='photo' src={data.sprites.other.home.front_shiny} alt='front_default'></img>
                </div>
                <div className='stats'>
                    <h2 className='poke-name'>Name: {data.name}</h2>
                    <h2>Height: {data.height}</h2>
                    <h2>Weight: {data.weight}</h2>
                    <div>Stats:{data.stats.map((elem) =>  {
                        return <li className='stats-list' key={uuidv4()}>{elem.stat.name} - {elem.base_stat}</li>
                    })}</div>
                    <div>Abilities: {data.abilities.map((elem) => {
                        return <li className='abilities-list' key={uuidv4()}>{elem.ability.name}</li>
                    })}</div>
                </div>
            </div>
        );
    }
};

export default RandomPokemon;

