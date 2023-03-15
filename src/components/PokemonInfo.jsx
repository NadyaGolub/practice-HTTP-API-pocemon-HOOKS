import { Component } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataViev from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import fetchPokemon from './pokemon-api';



class PokemonInfo extends Component {
  state = {
    pokemon: null,
    //   loading: false,
      status: 'idle',

    /* // стейт машина: статус:

// 'idle' - простий, нічого не робить
// 'pending' - очікується
// 'resolved' - виконалося із якимось результатом
// 'rejected' - відхилено */

  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      

      // this.setState({ loading: true, pokemon: null });
        this.setState({ status: 'pending' });
        fetchPokemon.fetchPokemon(nextName)
    //   fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
    //     .then(response => {
    //       if (response.ok) {
    //         return response.json();
    //       }
    //       return Promise.reject(
    //         new Error(`Немає покемона з іменем ${nextName}`)
    //       );
    //     })
        //   .then(pokemon => this.setState({ pokemon }))
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        //   .catch(error => this.setState({ error }))
        .catch(error => this.setState({ error, status: 'rejected' }));
      // .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
      const { pokemon,  error, status } = this.state;
      const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Введіть імя покемона</div>;
    }

      if (status === 'pending') {
        return <PokemonPendingView pokemonName={pokemonName}/>
    //   return <div>Завантажуємо ...</div>;
    }

    if (status === 'rejected') {
    //   return error && <h1>{error.message}</h1>;
        return <PokemonErrorView message={error.message}/>
    }

    if (status === 'resolved') {
        return <PokemonDataViev pokemon={pokemon} />;
    //     return (
    // //     <div>
    // //       <p>{this.state.pokemon.name}</p>
    // //       <img
    // //         src={pokemon.sprites.other['official-artwork'].front_default}
    // //         alt={pokemon.name}
    // //         width="240"
    // //       />
    // //     </div>
    // //   );
    }

    //   const { pokemon, loading, error, status } = this.state;
    //   const { pokemonName } = this.props;
    // return (
    //   <div>
    //     {error && <h1>{error.message}</h1>}
    //     {loading && <div>Завантажуємо ...</div>}
    //     {!pokemonName && <div>Введіть імя покемона</div>}
    //     {pokemon && (
    //       <div>
    //         <p>{this.state.pokemon.name}</p>
    //         <img
    //           src={pokemon.sprites.other['official-artwork'].front_default}
    //           alt={pokemon.name}
    //           width="240"
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
  }
}

export default PokemonInfo;
