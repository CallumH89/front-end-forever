import * as React from 'react';
import styled from 'styled-components';
import { TrailerIcon } from '../TrailerIcon/TrailerIcon';
import {H4, P} from '../Typography/Typography';

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

    & ${H4} {
      margin-top:0;
      margin-bottom:0rem;
    }
`;

export const MovieSynopsis = styled.div`
  margin-top:1rem;
`;

export const MovieInfo = styled.div`
  & ${P} {
    display:inline-block;
    margin-bottom: 0; 
    margin-top:0.5rem;

    & + ${P} {
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
      <H4>{props.title}</H4>
        <MovieInfo>
          <P>{props.runtime}</P>
          <P>{props.rating}</P>
        </MovieInfo>
        {props.hasSynopsis && 
          <P>{props.synopsis}</P>
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