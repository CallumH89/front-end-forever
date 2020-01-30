import React from 'react';
import trailerIcon from '../libs/svg/icon-trailer.svg';
import arrowIcon from '../libs/svg/icon-arrow.svg';
import '../scss/app.scss';
import { Button as Btn } from '../components/Button/Button';
import { boolean, radios, withKnobs } from '@storybook/addon-knobs';
import Centered from '@storybook/addon-centered/react';

export default {
  title: 'Button',
  component: Btn,
  decorators: [withKnobs, Centered]
};

const label = 'Icon Type';
const iconSources = {
  trailer: trailerIcon,
  arrow: arrowIcon
};
const defaultValue = iconSources.trailer;
const groupId = 'Icons';



const typeLabel = 'Button Type';
const typeValues = {
  Small: "Small",
  Large: "Large",
  Rounded: "Rounded"
};
const typeValue = typeValues.Small;
const typeGroup = 'Button Type';


export const Button = () => (
  <Btn
    rounded={radios(typeLabel, typeValues, typeValue, typeGroup)==="Rounded"}
    outline={boolean('Outline', false)}
    inverted={boolean('Inverted', false)}
    fullWidth={boolean('Full Width', false)}
    hasIcon={boolean('Has Icon', false)}
    iconSrc={radios(label, iconSources, defaultValue, groupId)}
    small={radios(typeLabel, typeValues, typeValue, typeGroup)==="Small"}
    large={radios(typeLabel, typeValues, typeValue, typeGroup)==="Large"}
  >
    Click Me
  </Btn>
);
