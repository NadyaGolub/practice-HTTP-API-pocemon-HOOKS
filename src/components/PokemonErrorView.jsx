import errorImage from '../cat.jpg';

function PokemonErrorView({ message }) {
    return (
        <div role='alert'>
            <img src={errorImage} width='240' alt='sadcat' />
            <p>{message}</p>
        </div>
    );
}

export default PokemonErrorView;