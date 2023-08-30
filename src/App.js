import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PokemonList from './components/pokemonList/pokemonList';
import RandomPokemon from './components/randomPokemon/randomPokemon';
import SelectedPokemon from './components/selectedPokemon/SelectedPokemon';
import PokemonsNavbar from './components/navbar/pokemonsNavbar';
import AboutPage from './components/about/aboutPage';
import ItemsPage from './components/itemsPage/itemsPage';
import LocationsPage from './components/locations/locationsPage';
import GamePage from './components/game/game';

function App() {
  const Home = () => {
    return (
      <>
        <RandomPokemon />
        <PokemonList />
      </>
    );
  };

  return (
    <div className="App">
      <Router>
        <PokemonsNavbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path='/selected/:pokemonId' element={<SelectedPokemon/>}>
          </Route>
          <Route exact path='/about' element={<AboutPage/>}>
          </Route>
          <Route exact path='/items' element={<ItemsPage/>}>
          </Route>
          <Route exact path='/locations' element={<LocationsPage/>}>
          </Route>
          <Route exact path='/game' element={<GamePage/>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
