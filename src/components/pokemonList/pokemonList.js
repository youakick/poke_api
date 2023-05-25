import { useEffect, useState } from 'react';
import React from 'react';
import useFetchData from '../../services/services';
import { v4 as uuidv4 } from 'uuid'
import '../pokemonList/pokemonList.css'

const PokemonList = () => {
    const [data, setData] = useState(null)
    const [offset] = useState(100)
    const limit = 16
    const totalPages = Math.ceil(offset / limit)
    const [currentPage, setCurrentPage] = useState(1);

    const {pokemonListData} = useFetchData()

    useEffect(() => {
        pokemonListData(setData, offset)
    }, [currentPage])


        const startIndex = (currentPage - 1) * limit
        const endIndex = startIndex + limit

        const ItemsToShow = () => {
            if(data === null){
                return <div>Waiting...</div>
            } else {
                const pageArr = data.slice(startIndex, endIndex)
                return pageArr.map((elem) => { 
                return <div key={uuidv4()} className='pokemons-list-items'>
                        <img src={elem.sprites.front_default} alt={elem.id}/>
                        <div>{elem.name}</div>
                    </div>
                }
                )
            }         
        }

    const nextPage = () => {
        if(currentPage === 7) {
            return setCurrentPage(7)
        } else {
            return setCurrentPage(currentPage + 1)
        }
    }

    const previousPage = () => {
        if(currentPage === 1) {
            return setCurrentPage(1)
        } else {
            setCurrentPage(currentPage - 1)
        }
    }
    
    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    } 

    const pagesIndication = () => {
        const pageNumbers = []
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <span
                  key={i}
                  onClick={() => goToPage(i)}
                  style={{ cursor: 'pointer', marginRight: '5px', fontWeight: i === currentPage ? 'bold' : 'normal' }}
                >
                  {i}
                </span>
              );
            }
            return pageNumbers;
        }

    return (
        <div>
            <div className='main-pokemon-list'>
                {data === null ? <div>Loading...</div> : <ItemsToShow/>}
            </div> 
            <button onClick={previousPage}>Previous page</button>
            {pagesIndication()}
            <button onClick={nextPage}>Next page</button>


        </div>

    );
};

export default PokemonList;