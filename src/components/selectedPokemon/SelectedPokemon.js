import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import useFetchData from '../../services/services';
import PokemonsCarousel from '../pokemonsCarousel/pokemonsCarousel';
import Button from 'react-bootstrap/Button';
import "../selectedPokemon/selectedPokemon.css"

const SelectedPokemon = () => {
    const {dataOfSelectedPokemon, randomPokemonData, pokemonFromInput} = useFetchData()

    const params = useParams()
    const [pokemonId, setPokemonId] = useState(params.pokemonId)
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [randomChar, setRandomChar] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [submitedInputValue, setSubmitedInputValue] = useState('')
    const [sendRequest, setSendRequest] = useState(true)
    
    useEffect(() => {
        if(submitedInputValue === '') {
            dataOfSelectedPokemon(setSelectedPokemon, pokemonId)
            randomPokemonData(setRandomChar)
        } else {
            pokemonFromInput(setSelectedPokemon, submitedInputValue)
        }
    }, [pokemonId, sendRequest])

    const randomOption = () => {
        setSelectedPokemon(randomChar)
        setPokemonId(pokemonId + 1)
    }

    const saveValue = (e) => {
        setInputValue(e.target.value)
    }

    const submitValue = (event) => {
        event.preventDefault();
        setSubmitedInputValue(inputValue);
        setInputValue('')
        setSendRequest(!sendRequest)
    }

    console.log(submitedInputValue)
    console.log(sendRequest)

    return (<div>
        <Link to={'/'}>
            <Button variant="primary" className='nav-buttons'>Return to home page</Button>
        </Link>
            <Button variant="primary" onClick={randomOption} className='nav-buttons'>Change pokemon</Button>
            <form onSubmit={submitValue}>
                <input type="text" value={inputValue} onChange={saveValue} />
                <button type="submit">Search</button>
            </form>
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