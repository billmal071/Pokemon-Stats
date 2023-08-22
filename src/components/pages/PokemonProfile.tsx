import React, { useEffect, useContext, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const PokemonProfile = ({ match }: { match: { params: { name: string } } }) => {
  const pokemonContext = useContext(PokemonContext);
  const { getPokemonProfile, loading, pokemon, clearPokemon } = pokemonContext;
  const {
    name,
    weight,
    sprites,
    abilities,
    base_experience,
    game_indices,
    height,
    moves,
    stats,
    types,
    order,
    held_items,
  } = pokemon;

  useEffect(() => {
    getPokemonProfile(match.params.name);
    clearPokemon();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="middle">
        <div className="spinner-border text-muted"></div>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="justify-content-center">
        <div className="card box-width mx-auto justify-content-center">
          <img
            className="card-img-top bg-dark p-3"
            src={sprites && sprites.other.dream_world.front_default}
            alt={`${name} front default`}
          />
          <div className="card-body">
            <h4 className="card-title text-uppercase">{name}</h4>
            <p className="card-text font-weight-bold">
              Weight: {weight}, Height: {height}
            </p>
            <p className="card-text font-weight-bold">
              Base Experience: {base_experience}
            </p>
            <p className="card-text font-weight-bold">Order: {order}</p>
          </div>
        </div>

        <div className="mx-auto justify-content-center box-width">
          <img src={sprites && sprites.back_default} alt="" />
          <img src={sprites && sprites.back_shiny} alt="" />
          <img src={sprites && sprites.front_default} alt="" />
          <img src={sprites && sprites.front_shiny} alt="" />
        </div>

        <div
          className="card example box-width mx-auto justify-content-center"
          style={{ height: "400px", overflow: "auto" }}
        >
          <div className="card-body">
            <h4 className="card-title">Ability</h4>
            {abilities &&
              abilities.map((ability, index) => (
                <p className="card-text font-italic" key={index}>
                  {" "}
                  {ability.ability.name}{" "}
                </p>
              ))}
            <h4 className="card-title">Moves</h4>
            {moves &&
              moves.map((move, index) => (
                <p className="card-text font-italic" key={index}>
                  {" "}
                  {move.move.name}{" "}
                </p>
              ))}
          </div>
        </div>

        <h4 className="mt-2">Game Index</h4>
        <div className="mx-auto justify-content-center">
          <div className="example" style={{ overflow: "auto" }}>
            {game_indices &&
              game_indices.map((game, index) => (
                <Fragment key={index}>
                  <span className="text-capitalize">{game.version.name}</span>{" "}
                  <p
                    className={`skill my-2 px-2`}
                    style={{
                      width: game.game_index + "%",
                      backgroundColor: "#4CAF50",
                    }}
                  >
                    {" "}
                    {game.game_index}
                  </p>
                </Fragment>
              ))}
          </div>
        </div>

        <h4>Stats</h4>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                {stats &&
                  stats.map((stat, index) => (
                    <th key={index} className="text-uppercase">
                      {stat.stat.name}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-capitalize">effort</td>
                {stats &&
                  stats.map((stat, index) => (
                    <td key={index}>{stat.effort}</td>
                  ))}
              </tr>
              <tr>
                <td className="text-capitalize">base stat</td>
                {stats &&
                  stats.map((stat, index) => (
                    <td key={index}>{stat.base_stat}</td>
                  ))}
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Types</h4>
        <ul className="list-group">
          {types &&
            types.map((type, index) => (
              <li className="list-group-item text-capitalize" key={index}>
                slot <span className="badge badge-secondary">{type.slot}</span>{" "}
                name{" "}
                <span className="badge badge-secondary">{type.type.name}</span>
              </li>
            ))}
        </ul>

        <div id="accordion" className="my-3">
          {held_items ? (
            <Fragment>
              <h4>Held Items</h4>
              {held_items.map((heldItem, index) => (
                <div className="card" key={index}>
                  <div className="card-header">
                    <a
                      className="card-link text-capitalize"
                      data-toggle="collapse"
                      href={`#collapse${index}`}
                    >
                      {heldItem.item.name}
                    </a>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className="collapse show"
                    data-parent="#accordion"
                  >
                    <div className="card-body border border-bottom">
                      {heldItem.version_details.map((details, index) => (
                        <p className="text-capitalize border p-2" key={index}>
                          rarity: {details.rarity} and version name:{" "}
                          {details.version.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default PokemonProfile;
