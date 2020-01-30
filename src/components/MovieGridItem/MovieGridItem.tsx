import * as React from 'react';
import styled from 'styled-components';
import { Sessions } from '../../types';
import MovieGridSessionList from '../MovieSessionList/MovieGridSessionList';
import {MoviePoster, MoviePosterContainer} from '../MoviePoster/MoviePoster';
import {MoviePosterOverlay} from '../MoviePoster/MoviePosterOverlay';
import {MovieDetails} from '../MovieDetails/MovieDetails'

interface itemProps {
  title: string;
  rating?: string;
  runtime?: string;
  synopsis?: string;
  filmId: number;
  poster?: string;
  hasOverlay?: boolean;
  hasSynopsis?: boolean;
  hasDetails?: boolean;
  isCentered?: boolean;
  hasTrailerIcon?: boolean;
  showSessions?: boolean;
  sessions: Sessions[];
  sessionsPerRow?: any;
}

const SingleItem = styled.div`
width:100%;
display:flex;
flex-direction:column;
height:100%;
`;
export const MovieDetailsContainer = styled.div`
margin-top: 1rem;
`;

const MovieGridItem: React.FunctionComponent<itemProps> = props => {
  return (
    <SingleItem>
      <MoviePosterContainer>
        <MoviePoster src={props.poster} alt={props.title} />
        {props.hasOverlay &&
          <MoviePosterOverlay 
            hasSynopsis={true} 
            isTrailerOnly={false} 
            isCentered={true}
            synopsis={props.synopsis} 
            title={props.title} 
            rating={props.rating} 
            runtime={props.runtime} />
        }
      </MoviePosterContainer>
      <MovieDetailsContainer>
      {props.hasDetails &&
        <MovieDetails 
          hasSynopsis={props.hasSynopsis} 
          synopsis={props.synopsis} 
          hasTrailerIcon={props.hasTrailerIcon} 
          isCentered={props.isCentered}
          title={props.title}
          rating={props.rating}
          runtime={props.runtime} /> }
      </MovieDetailsContainer>
        {props.showSessions &&
          props.sessions.map((sessionList, i) => (
          <MovieGridSessionList
            key={i}
            sessionsPerRow={props.sessionsPerRow}
            date={sessionList.DisplayDate}
            times={sessionList.Times}
          />
        ))}
    </SingleItem>
  );
};

export default MovieGridItem;
