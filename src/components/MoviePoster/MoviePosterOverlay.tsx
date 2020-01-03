import * as React from 'react';
import styled from 'styled-components';
import trailerIcon from '../../libs/svg/icon-trailer.svg';
import arrowIcon from '../../libs/svg/icon-arrow.svg';
import {MovieInfo, MovieDetails, MovieSynopsis} from '../MovieDetails/MovieDetails';
import {H4, P} from '../Typography/Typography';
import { TrailerIcon } from '../TrailerIcon/TrailerIcon';
import { Button, Buttons } from '../Button/Button';

export const MoviePosterOverlayContainer = styled.div`
  position:absolute;
  top:1rem;
  bottom:1rem;
  left:1rem;
  right:1rem;
  padding:1rem;
  background:rgba(0,0,0, 0.6);
  border-radius: 5px;
  opacity: 0;
  transition:0.2s;
  display:flex;
  flex-direction:column;
  & ${P},
  & ${H4} {
    color:#fff;
  }

  & ${MovieSynopsis} {
    max-height:150px;
    overflow:hidden;
  }

  & ${MovieInfo} {
    & ${P} + ${P} {
      border-left:1px solid #ffffff;
    }
  }

  & ${Button} {
    margin-top:1rem;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top:auto;
`;

export const MoviePosterOverlayTrailer = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top: 0;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  transition:0.2s;
  opacity: 0;
`;


interface overlayProps {
hasSynopsis: boolean; 
isTrailerOnly: boolean; 
isCentered: boolean; 
title?: string;
rating?: string;
runtime?: string;
synopsis?: string;
}



export const MoviePosterOverlay: React.FunctionComponent<overlayProps> = props => {
if(props.isTrailerOnly) {
  return (
    <MoviePosterOverlayTrailer>
      <TrailerIcon />
    </MoviePosterOverlayTrailer>
  )
} else {
  return (
      <MoviePosterOverlayContainer>
        <MovieDetails 
        hasSynopsis={props.hasSynopsis} 
        synopsis={props.synopsis} 
        hasTrailerIcon={false} 
        isCentered={props.isCentered}
        title={props.title}
        rating={props.rating}
        runtime={props.runtime} />
        <ButtonsContainer>
          <Buttons rounded={true} outline={true} fullWidth={true} large={true} text={"TRAILER"} hasIcon={true} iconSrc={trailerIcon} />
          <Buttons rounded={true} fullWidth={true} inverted={true} large={true} text={"DETAILS"} hasIcon={true} iconSrc={arrowIcon} />
        </ButtonsContainer>
      </MoviePosterOverlayContainer>
  );
}
};

