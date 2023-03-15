import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  // toLowerCase() - приводить все до нижнього регістру


  handleSubmit = event => {
    if (this.state.pokemonName.trim() === '') {
      toast.error("Введіть імя покемона");
      return;

      // Це означає, що якщо цей стейт pokemonName(this.state.pokemonName)
      // (trim() - видаляє пробіли з обох сторін) дорівнює пустому рядку(''),
      // то потрібно вивести повідомлення(alert('Введіть імя покемона')). 
      // При цьому метод onSubmit не буде виконуватися, тому що стоїть return, який 
      // виходить з методу.

    }

    event.preventDefault();

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Знайти
        </button>
      </form>
    );
  }
}

export default PokemonForm;
