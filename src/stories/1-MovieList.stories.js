import React from 'react';
import "../scss/app.scss";
import MovieList from "../components/MovieList/MovieList";
import MovieListItem from '../components/MovieListItem/MovieListItem';
import { withKnobs,  boolean } from "@storybook/addon-knobs";
import Centered from '@storybook/addon-centered/react';
import data from '../data/data.json';

export default {
  title: 'Movie List',
  component: MovieList,
  decorators: [withKnobs, Centered]};


//export const MovieList = () => <ML data={data} />;

export const Listing = () => <MovieList 
                                data={data} 
                                showSessions={boolean("Show sessions", true)}
                                hasOverlay={boolean("Enable overlay on hover", false)} />;


export const SingleListItem = () => <MovieListItem 
                                        title={data[0].Title}
                                        runtime={data[0].RunTime}
                                        rating={data[0].Cert}
                                        poster={data[0].MediaItems.Poster}
                                        sessions={data[0].Sessions}
                                        hasOverlay={boolean("Enable overlay on hover", false)}
                                        showSessions={boolean("Show sessions", true)}
                                        filmId={data[0].FilmId}/>;
