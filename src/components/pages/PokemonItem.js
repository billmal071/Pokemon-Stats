import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonItem = ({ characters }) => {

    const { name } = characters;

    return (
        <div className="container card shadow-lg">
            <div className="card-body text-center">
                <NavLink className="btn text-uppercase hover-blue" exact to={`/pokemon/${name}`}><p>{name}</p></NavLink>
            </div>
        </div>
    )
}

export default PokemonItem;