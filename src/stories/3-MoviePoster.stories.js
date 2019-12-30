import React from 'react';
import "../scss/app.scss";
import {MoviePoster, MoviePosterContainer} from '../components/MoviePoster/MoviePoster';
import {MoviePosterOverlay} from '../components/MoviePoster/MoviePosterOverlay';
import { withKnobs,  boolean } from "@storybook/addon-knobs";
import Centered from '@storybook/addon-centered/react';
import data from '../data/data.json';

export default {
  title: 'Movie Poster',
  component: MoviePosterContainer,
  decorators: [withKnobs, Centered]
}; 


export const PosterWithTrailerOverlay = () => <MoviePosterContainer>
<MoviePoster src={data[2].Img} alt={data[2].Title} />
{boolean("Enable overlay on hover", true) &&
  <MoviePosterOverlay 
    isTrailerOnly={true}
    hasSynopsis={false}
    isCentered={false}
    synopsis={data[2].Teaser}
    title={data[2].Title} 
    rating={data[2].Cert} 
    runtime={data[2].RunTime} />
}
</MoviePosterContainer>

export const PosterWithFullOverlay = () => <MoviePosterContainer>
<MoviePoster src={data[1].Img} alt={data[1].Title} />
{boolean("Enable overlay on hover", true) &&
  <MoviePosterOverlay 
    isTrailerOnly={false}
    hasSynopsis={boolean("Show synopsis", true)}
    isCentered={boolean("Center details", true)}
    synopsis={data[1].Teaser} 
    title={data[1].Title} 
    rating={data[1].Cert} 
    runtime={data[1].RunTime} />
}
</MoviePosterContainer>
