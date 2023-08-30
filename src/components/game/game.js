import '../game/game.css'

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import useFetchData from '../../services/services';


const GamePage = () => {
    const {randomPokemonData} = useFetchData()

    const [firstChar, setFirstChar] = useState(null)
    const [secondChar, setSecondChar] = useState(null)
    const [getNewChar, setGetNewChar] = useState(false)


    const number = () => Math.floor(Math.random() * (99 - 0) + 0)
    console.log(firstChar)
    console.log(secondChar)

    const startGame = () => {
        if(firstChar.base_experience > secondChar.base_experience) {
            prompt(`${firstChar.name.toUpperCase()} win`)
        } else if (secondChar.base_experience > firstChar.base_experience) {
            prompt(`${secondChar.name.toUpperCase()} win`)
        } else {
            prompt('Characters decide to avoid this fight')
        }
        setGetNewChar(!getNewChar)
    } 

    useEffect(() => {
        randomPokemonData(setFirstChar, number())
        randomPokemonData(setSecondChar, number())
    }, [getNewChar])

    return (
        <div>
            {firstChar === null || secondChar === null ? <div>Game loading</div> : 
                <div className='details'>
                    <div className='first-char'>
                        <img className='first-image' src={firstChar.sprites.other.dream_world.front_default} alt={firstChar.id}/>
                        <h2>{firstChar.name.toUpperCase()}</h2>
                    </div>
                    <div>
                        <h2 className='versus'>VS</h2>
                        <Button className='navigation' onClick={startGame}>Start game</Button>
                    </div>
                    <div className='second-char'>
                        <img className='second-image' src={secondChar.sprites.other.dream_world.front_default} alt={firstChar.id}/>
                        <h2>{secondChar.name.toUpperCase()}</h2>
                    </div>
                </div>}

        </div>
    );
};

export default GamePage;