import "../navbar/pokemonsNavbar.css"

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const PokemonsNavbar = () => {

    return (
        <div className="container">
        <Link to={'/'}>
            <Button variant="primary" className='navigations'>Home</Button>
        </Link>
        <Link to={'/items'}>
            <Button variant="primary" className='navigations'>Items</Button>
        </Link>
        <Link to={'/locations'}>
            <Button variant="primary" className='navigations'>Locations</Button>
        </Link>
        <Link to={'/about'}>
            <Button variant="primary" className='navigations'>About</Button>
        </Link>
        <Link to={'/game'}>
            <Button variant="primary" className='navigations'>Game</Button>
        </Link>
        </div>
    )
}

export default PokemonsNavbar;