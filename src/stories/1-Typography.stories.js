import React from 'react';
import styled from 'styled-components';
import "../scss/app.scss";
import {H1, H2, H3, H4, H5, H6, P, PSmall} from '../components/Typography/Typography';
import { withKnobs } from "@storybook/addon-knobs";
import Centered from '@storybook/addon-centered/react';

export default {
  title: 'Typography',
  decorators: [withKnobs, Centered]
};

const Container = styled.div`
  width:400px;
  margin: 0 auto;
`;
export const Typography = () => <Container>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <H6>Heading 6 / Intro text</H6>
        <P>This is the default paragraph text, 16px on 24px, 1rem on 1.5rem</P>
        <PSmall>This is the small text size, 10px on 15px, 0.625rem on 0.9375rem</PSmall>
    </Container>
