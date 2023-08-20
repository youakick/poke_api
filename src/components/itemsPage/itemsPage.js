import "../itemsPage/itemsPage.css"

import React, { useEffect, useState } from 'react';
import useFetchData from '../../services/services';
import Button from 'react-bootstrap/Button';

const ItemsPage = () => {
    const {pokeItems} = useFetchData()
    const [items, setItems] = useState(null)
    const [number, setNumber] = useState(1)

    const nextItem = () => {
        setNumber(number + 1)
    }

    const previousItem = () => {
        if(number !== 0) {
            setNumber(number - 1)
        }
    }

    const description = () => {
        const allDescr = items.flavor_text_entries.map(elem => elem.text)
        return allDescr[0]
    }


    useEffect(() => {
        pokeItems(number, setItems)
    },[number, setItems])

    return (
        <div>
            {items === null ? <p>Waiting for data...</p> : <div>
                <div className="items-container">
                    <img className="item-image" src={items.sprites.default} alt={items.id}/>
                    {items.name.toUpperCase()}
                    <p><span>Description:</span> {description()}</p>
                    <p><span>Effects:</span> {items.effect_entries.map(elem => elem.short_effect)}</p>
                </div>
                <div className='btns'>
                    <Button onClick={previousItem} className='state-btn'>Previous item</Button>
                    <Button onClick={nextItem} className='state-btn'>Next item</Button>
                </div>
            </div>
            }
        </div>
    );
};

export default ItemsPage;