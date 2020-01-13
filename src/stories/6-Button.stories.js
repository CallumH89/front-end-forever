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

export const Button = () => (
  <Btn
    rounded={boolean('Rounded', false)}
    outline={boolean('Outline', false)}
    inverted={boolean('Inverted', false)}
    fullWidth={boolean('Full Width', false)}
    hasIcon={boolean('Has Icon', false)}
    iconSrc={radios(label, iconSources, defaultValue, groupId)}
    small={boolean('Rounded', false)}
    large={boolean('Rounded', false)}
  >
    Click Me
  </Btn>
);
