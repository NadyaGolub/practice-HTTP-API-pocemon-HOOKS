import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

function PokemonForm({onSubmit}) {
  const [pokemonName, setPokemonName] = useState('');

  // state = {
  //   pokemonName: '',
  // };

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  // toLowerCase() - приводить все до нижнього регістру


  const handleSubmit = event => {
    if (pokemonName.trim() === '') {
      toast.error("Введіть імя покемона");
      return;

      // Це означає, що якщо цей стейт pokemonName(this.state.pokemonName)
      // (trim() - видаляє пробіли з обох сторін) дорівнює пустому рядку(''),
      // то потрібно вивести повідомлення(alert('Введіть імя покемона')). 
      // При цьому метод onSubmit не буде виконуватися, тому що стоїть return, який 
      // виходить з методу.

    }

    event.preventDefault();

    onSubmit(pokemonName);
    setPokemonName( '' );
  };
  
    return (
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Знайти
        </button>
      </form>
    );
  
}

export default PokemonForm;
