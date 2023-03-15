import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWith: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={ this.state.pokemonName} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }
}

export default App;

// import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';

// class App extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   }
//   componentDidMount() {
//     this.setState({loading:true})
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => res.json())
//       .then(pokemon => this.setState({ pokemon }))
//     .finally(() => this.setState({ loading: false }));
//   }
//   render() {
//     return (
//       <div style={{ maxWith: 1170, margin: '0 auto', padding: 20 }}>
//         {this.state.loading && <div>Loading...</div>}
//         {this.state.pokemon && <div>{ this.state.pokemon.name}</div>}

//         {/* Якщо this.state.pokemon буде то нічого не зарендериться,
//         якщо в this.state.pokemon прийде якийсь обєкт зі значеннями,
//         то зарендериться <div>тут буде покемон</div> */}

//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }

// export default App;
