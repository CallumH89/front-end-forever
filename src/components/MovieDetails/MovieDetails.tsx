import * as React from 'react';
import styled from 'styled-components';
import { TrailerIcon } from '../TrailerIcon/TrailerIcon';

interface detailsProps {
  hasSynopsis?: boolean; 
  hasTrailerIcon?: boolean; 
  isCentered?: boolean; 
  title?: string;
  rating?: string;
  runtime?: string;
  synopsis?: string;
}

export const MovieDetailsContainer = styled("div")<detailsProps>`
  ${props =>
    props.hasTrailerIcon && 
    `display: grid;
    grid-template-columns: auto 40px;`}
`;

export const MovieSynopsis = styled.div`
  margin-top:1rem;
`;

export const MovieTitle = styled.h3`
  margin-top:0;
  margin-bottom:0.5rem;
`;

export const MovieInfo = styled.div`
  & span {
    display:inline-block;
    
    & + span {
      margin-left: 0.5rem;
      padding-left: 0.5rem;
      border-left:1px solid #000000;
    }
  }
`;


export const MovieDetails: React.FunctionComponent<detailsProps> = props => {
  return (
    <MovieDetailsContainer hasTrailerIcon={props.hasTrailerIcon} className={props.isCentered ? "ta__center" : ""}>
      <div>
      <MovieTitle>{props.title}</MovieTitle>
        <MovieInfo>
          <span>{props.runtime}</span>
          <span>{props.rating}</span>
        </MovieInfo>
        {props.hasSynopsis && 
          <MovieSynopsis>{props.synopsis}</MovieSynopsis>
        }
      </div>
      {props.hasTrailerIcon && 
      <div>
          <TrailerIcon inverted={true} />
      </div>
      }
    </MovieDetailsContainer>
  );
};