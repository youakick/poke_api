import "../locations/locationsPage.css"

import React, { useEffect, useState } from 'react';
import useFetchData from '../../services/services';
import Button from 'react-bootstrap/Button';

const LocationsPage = () => {
    const { locations} = useFetchData()

    const [location, setLocations] = useState(null)
    const [number, setNumber] = useState(1)

    const nextItem = () => {
        setNumber(number + 1)
    }

    const previousItem = () => {
        if(number !== 0) {
            setNumber(number - 1)
        }
    }

    const locationName = () => {
        const allDescr = location.names.map(elem => elem.name)
        return allDescr[0]
    }


    useEffect(() => {
        locations(number, setLocations)
    },[number, setLocations])

    return (
        <div className='locations-container'>
            {location === null ? <p>Waiting for data...</p> : <div>
                <div>
                    <p><span>Location name :</span> {locationName()}</p>
                    <p><span>Region :</span> {location.region.name.toUpperCase()}</p>
                </div>
                <div className='btns'>
                    <Button onClick={previousItem} className='location-btn'>Previous Location</Button>
                    <Button onClick={nextItem} className='location-btn'>Next Location</Button>
                </div>
            </div>
            }
        </div>
    );
};

export default LocationsPage;