import * as React from 'react';
import styled from 'styled-components';
import { filmData } from '../../types';
import MovieListItem from '../MovieListItem/MovieListItem';

interface ListingProps {
  data: filmData[];
}

const Container = styled.div`
  margin: 2rem auto;
  width: 600px;
  display: block;
`;

const MovieList: React.FunctionComponent<ListingProps> = props => {
  return (
    <Container>
      {props.data.map((singleFilm, i) => (
        <MovieListItem
          key={i}
          title={singleFilm.Title}
          poster={singleFilm.MediaItems.Poster}
          sessions={singleFilm.Sessions}
          filmId={singleFilm.FilmId}
        />
      ))}
    </Container>
  );
};

export default MovieList;
