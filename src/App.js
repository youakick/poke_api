import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PokemonList from './components/pokemonList/pokemonList';
import RandomPokemon from './components/randomPokemon/randomPokemon';
import SelectedPokemon from './components/selectedPokemon/SelectedPokemon';

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
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path='/selected/:pokemonId' element={<SelectedPokemon/>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
