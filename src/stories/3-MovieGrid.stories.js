import React from 'react';
import styled from 'styled-components';
import "../scss/app.scss";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import MovieGridItem from '../components/MovieGridItem/MovieGridItem';
import { withKnobs,  boolean, radios } from "@storybook/addon-knobs";
import Centered from '@storybook/addon-centered/react';
import data from '../data/data.json';

export default {
  title: 'Movie Grid',
  component: MovieGrid,
  decorators: [withKnobs, Centered]};

const Container = styled.div`
  width:300px;
  margin: 0 auto;
`;

const label = 'Sessions per row';
const options = {
    4: '3',
    3: '4',
    2: '6'
};
const defaultValue = '4';
const groupId = 'Sessions';



export const Grid = () => <MovieGrid 
                            data={data} 
                            showSessions={boolean("Show sessions", true)}
                            hasSynopsis={boolean("Show synopsis", true)}
                            hasDetails={boolean("Show movie details", true)}
                            isCentered={boolean("Center details", false)}
                            sessionsPerRow={radios(label, options, defaultValue, groupId)}
                            hasTrailerIcon={boolean("Trailer icon with movie details", true)}
                            hasOverlay={boolean("Enable overlay on hover", false)} />;


export const SingleGridItem = () => <Container><MovieGridItem 
                                      title={data[0].Title}
                                      runtime={data[0].RunTime}
                                      rating={data[0].Cert}
                                      poster={data[0].MediaItems.Poster}
                                      sessions={data[0].Sessions}
                                      synopsis={data[0].Teaser}
                                      hasDetails={boolean("Show movie details", true)}
                                      hasSynopsis={boolean("Show synopsis", true)}
                                      isCentered={boolean("Center details", false)}
                                      hasOverlay={boolean("Enable overlay on hover", false)}
                                      showSessions={boolean("Show sessions", true)}
                                      sessionsPerRow={radios(label, options, defaultValue, groupId)}
                                      hasTrailerIcon={boolean("Trailer icon with movie details", true)}
                                      filmId={data[0].FilmId}/></Container>;
