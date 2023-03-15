import { ImSpinner } from 'react-icons/im';
import question from './question.png';
import PokemonDataViev from './PokemonDataView';

function PokemonPendingView({pokemonName}) {
    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: question,
                },
            },
        },
        stats: [],
    };
   
    return (
        <div>
            <div>
                <ImSpinner size='32' />
                Завантажуємо ...
            </div>
            <PokemonDataViev pokemon={pokemon} />
        </div>
    );
}

export default PokemonPendingView;