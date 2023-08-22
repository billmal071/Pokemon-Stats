import React, { Fragment, useContext, useEffect, useState } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import PokemonItem from "./PokemonItem";
import ReactPaginate from "react-paginate";

const PokemonCharacter = () => {
  const pokemonContext = useContext(PokemonContext);

  const { getPokemon, pokemons, loading } = pokemonContext;

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(60);
  const [, setOffset] = useState(0);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = pokemons.slice(indexOfFirstPost, indexOfLastPost);

  const pageCount = Math.ceil(pokemons.length / postsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected;
    const offset = selectedPage * postsPerPage;

    setCurrentPage(selectedPage + 1);
    setOffset(offset);
  };

  if (loading) {
    return (
      <div className="middle">
        <div className="spinner-border text-muted"></div>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="grid-box mb-3">
        {currentPost.map((characters, index) => (
          <PokemonItem key={index} characters={characters} />
        ))}
      </div>
      <div className="justify-content-center">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={"mx-auto justify-content-center pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </Fragment>
  );
};

export default PokemonCharacter;
