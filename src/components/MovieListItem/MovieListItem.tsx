import * as React from 'react';
import styled from 'styled-components';
import { Sessions } from '../../types';
import MovieSessionList from '../MovieSessionList/MovieSessionList';
import MoviePoster from '../MoviePoster/MoviePoster';

interface itemProps {
  title: string;
  filmId: number;
  poster?: string;
  sessions: Sessions[];
}

const SingleItem = styled.div`
  grid-gap: 1rem;
  grid-template-columns: 200px auto;
`;

const MovieListItem: React.FunctionComponent<itemProps> = props => {
  return (
    <SingleItem className='grid mb-2'>
      <div>
        <MoviePoster src={props.poster} alt={props.title} />
      </div>
      <div>
        <h2>{props.title}</h2>
        {props.sessions.map((sessionList, i) => (
          <MovieSessionList
            key={i}
            date={sessionList.DisplayDate}
            times={sessionList.Times}
          />
        ))}
      </div>
    </SingleItem>
  );
};

export default MovieListItem;
