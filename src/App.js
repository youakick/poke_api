import './App.css';
import PokemonList from './components/pokemonList/pokemonList';
import RandomPokemon from './components/randomPokemon/randomPokemon';

function App() {

  return (
    <div className="App">
      <RandomPokemon/>
      <PokemonList/>
    </div>
  );
}

export default App;
