import React, { useState, useContext } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const [text, setText] = useState('');

    const pokemonContext = useContext(PokemonContext);
    const { searchPokemon, clearPokemon } = pokemonContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Enter a value to search', 'danger');
        }
        searchPokemon(text);
        setText('');
        clearPokemon();
    }

    const onChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <form action="" onSubmit={onSubmit} className="mb-3">
                <label htmlFor="text"></label>
                <input className="form-control-plaintext border border-dark mb-2 pl-2" type="text" name="text" id="text" placeholder="enter pokemon name to Search" value={text} onChange={onChange} />
                <input className="btn btn-block btn-danger" type="submit" value="search"/>
            </form>
        </div>
    )
}

export default Search
