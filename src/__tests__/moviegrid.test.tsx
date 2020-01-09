import React from 'react'
import { render } from '@testing-library/react'
import MovieGridItem from '../components/MovieGridItem/MovieGridItem';
import data from '../data/data.json';


describe('Movie Grid Item', () => {
    test('showSessions === true, the sessions list is being rendered', () => {
        // Arrange
        const props = {
            title: data[0].Title,
            runtime: data[0].RunTime,
            rating: data[0].Cert,
            poster: data[0].MediaItems.Poster,
            sessions: data[0].Sessions,
            synopsis: data[0].Teaser,
            hasDetails: false,
            hasSynopsis: false,
            isCentered: false,
            hasOverlay: false,
            showSessions: true,
            hasTrailerIcon: false,
            filmId: data[0].FilmId
        };

        // Act
        const { getByTestId } = render(<MovieGridItem {...props} />);
    
        // Assert
        const hasSessions = getByTestId('movie-sessions');
        expect(hasSessions).toBeDefined();
      });

      test('showSessions === false, the sessions list isnt being rendered', () => {
        // Arrange
        const props = {
            title: data[0].Title,
            runtime: data[0].RunTime,
            rating: data[0].Cert,
            poster: data[0].MediaItems.Poster,
            sessions: data[0].Sessions,
            synopsis: data[0].Teaser,
            hasDetails: false,
            hasSynopsis: false,
            isCentered: false,
            hasOverlay: false,
            showSessions: false,
            hasTrailerIcon: false,
            filmId: data[0].FilmId
        };

        // Act
        const { queryByTestId } = render(<MovieGridItem {...props} />);
    
        // Assert
        expect(queryByTestId('movie-sessions')).toBeNull();
    });
});