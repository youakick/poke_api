import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import useFetchData from '../../services/services';
import { v4 as uuidv4 } from 'uuid'
import PokemonsCarousel from '../pokemonsCarousel/pokemonsCarousel';
import Button from 'react-bootstrap/Button';
import "../selectedPokemon/selectedPokemon.css"

const SelectedPokemon = () => {
    const params = useParams()
    const [pokemonId, setPokemonId] = useState(params.pokemonId)
    const {dataOfSelectedPokemon, randomPokemonData} = useFetchData()
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [randomChar, setRandomChar] = useState(null)



    
    useEffect(() => {
        dataOfSelectedPokemon(setSelectedPokemon, pokemonId)
        randomPokemonData(setRandomChar)
    }, [pokemonId])

    const randomOption = () => {
        setSelectedPokemon(randomChar)
        setPokemonId(pokemonId + 1)
    }


    return (<div>
        <Link to={'/'}>
            <Button variant="primary" className='nav-buttons'>Return to home page</Button>
        </Link>
            <Button variant="primary" onClick={randomOption} className='nav-buttons'>Change pokemon</Button>
        {selectedPokemon == null ?  <div>Loading...</div> : 
        <div className='selected-main'>
            <div className='selected-pokemon-name'>Your choise pokemon - {selectedPokemon.name.toUpperCase()}</div>
            <div className='selected-main-content'>
                <img src={selectedPokemon.sprites.other.home.front_default} alt={selectedPokemon.name.toUpperCase()} className='selected-pokemon-icon'/>
                <div className='selected-stats'>{selectedPokemon.name.toUpperCase()} stats:{selectedPokemon.stats.map((elem, i) => {
                    return <div key={i}>{elem.stat.name} - {elem.base_stat} points</div>
                })}</div>
            </div>
        </div>
        }
        <PokemonsCarousel/>
    </div>
    );
};

export default SelectedPokemon;