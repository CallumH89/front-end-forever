import * as React from 'react';
import styled from 'styled-components';
import { filmData } from '../../types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import { Grid } from '@material-ui/core';

interface ListingProps {
  showSessions?: boolean;
  hasSynopsis?: boolean;
  isCentered?: boolean;
  hasDetails?: boolean;
  hasTrailerIcon?: boolean;
  hasOverlay?: boolean;
  data: filmData[];
}

const Container = styled.div`
  width:90%;
  max-width:1440px;
  margin: 0 auto;
`;

const MovieList: React.FunctionComponent<ListingProps> = props => {
  return (
    <Container>
      <Grid
      container
      direction="row"
      spacing={5}
      >
        {props.data.map((singleFilm, i) => (
          <Grid
            item
            xl={3}
            lg={3}
            md={4}
            sm={6}
            xs={props.showSessions ? 12 : 6}
            >
            <MovieGridItem
              key={i}
              title={singleFilm.Title}
              rating={singleFilm.Cert}
              runtime={singleFilm.RunTime}
              synopsis={singleFilm.Teaser}
              hasDetails={props.hasDetails}
              hasSynopsis={props.hasSynopsis}
              isCentered={props.isCentered}
              hasTrailerIcon={props.hasTrailerIcon}
              poster={singleFilm.MediaItems.Poster}
              sessions={singleFilm.Sessions}
              showSessions={props.showSessions}
              hasOverlay={props.hasOverlay}
              filmId={singleFilm.FilmId}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
