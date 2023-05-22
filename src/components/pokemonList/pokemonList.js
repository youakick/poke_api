import { useEffect, useState } from 'react';
import React from 'react';
import useFetchData from '../../services/services';
import { v4 as uuidv4 } from 'uuid'
import '../pokemonList/pokemonList.css'

const PokemonList = () => {
    const [data, setData] = useState(null)
    const [offset, setOffset] = useState(0)
    const {pokemonListData} = useFetchData()

    useEffect(() => {
        pokemonListData(setData, offset)
    }, [offset])

    console.log(data)

    const nextPage = () => {
        setOffset(offset + 16)
    }

    const previousPage = () => {
        if(offset === 0) {
            return offset
        } else {
            setOffset(offset - 16)
        }
    }

    return (
        <div>
            <div className='main-pokemon-list'>
                {data === null ? <div>Loading...</div> : <div className='pokemons-list'>
                    {data.map((elem) => {
                        return <div key={uuidv4()} className='pokemons-list-items'>
                            <img src={elem.sprites.front_default} alt={elem.id}/>
                            <div>{elem.name}</div>
                        </div>
                })}
                </div>}
            </div> 
            <button onClick={previousPage}>Previous page</button>
            <button onClick={nextPage}>Next page</button>
        </div>

    );
};

export default PokemonList;