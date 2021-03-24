import React, {useEffect} from "react";
import {
  MovieContainer,
  MovieH1,
  MovieH2,
  MovieWrapper,
  MovieCard,
  MovieP,
} from "./MovieElements";
import {LOAD_MOVIES} from '../../graphQL/Queries';

import { useQuery, gql } from '@apollo/client'

const Movie = () => {

  const {error, loading, data} = useQuery(LOAD_MOVIES);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <MovieContainer id="Movie">
      <MovieH1>Our Movie</MovieH1>
      <MovieWrapper>
        <MovieCard>
          <MovieH2>Reduce expenses</MovieH2>
          <MovieP>
            We help reduce your fees and increase your overall revenue.
          </MovieP>
        </MovieCard>
      </MovieWrapper>
    </MovieContainer>
  );
};

export default Movie;
