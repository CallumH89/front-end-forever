import React from 'react';
import styled from 'styled-components';
import { MovieCarousel as Carousel } from '../components/MovieCarousel/MovieCarousel';
import Centered from '@storybook/addon-centered/react';
import data from '../data/data.json';

export default {
  title: 'Movie Carousel',
  component: Carousel,
  decorators: [ Centered]
};

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
  freeScroll: true,
  pageDots: true
}

const Container = styled.div`
  width:1000px;
  max-width:1440px;
  margin: 0 auto;
`;

export const MovieCarousel = () => 
  <Container><Carousel
    data={data}
    settings={flickityOptions}
  /></Container>;
