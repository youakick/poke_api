import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import useFetchData from '../../services/services';
import { v4 as uuidv4 } from 'uuid'

const SelectedPokemon = () => {
    const params = useParams()
    const pokemonId = params.pokemonId
    const {dataOfSelectedPokemon} = useFetchData()
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    useEffect(() => {
        dataOfSelectedPokemon(setSelectedPokemon, pokemonId)
    },[pokemonId])
    console.log(selectedPokemon)
    return (<div>
        {selectedPokemon == null ?  <div>Loading...</div> : 
            <div>
            <div>You chose  pokemon {selectedPokemon.name}</div>
            <div>
                <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name}/>
                <div>{selectedPokemon.name} stats:</div>
                <div >{selectedPokemon.stats.map((elem, i = {uuidv4}) => {
                    return <div key={i}>{elem.stat.name} - {elem.base_stat}</div>
                })}</div>
            </div>
        </div>
        }
    </div>
    );
};

export default SelectedPokemon;