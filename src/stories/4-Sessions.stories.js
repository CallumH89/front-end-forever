import React from 'react';
import "../scss/app.scss";
import { SingleSession as SS, SessionExperiences, SessionTime } from '../components/SingleSession/SingleSession';
import { withKnobs,  radios } from "@storybook/addon-knobs";
import Centered from '@storybook/addon-centered/react';

export default {
  title: 'Single Session',
  component: SS,
  decorators: [withKnobs, Centered]
};

const label = 'Session Options';
const options = {
    bookable: 'bookable',
    soldOut: 'soldOut',
    notBookable: 'notBookable',
    sessionExpired: 'sessionExpired',
};
const defaultValue = 'bookable';
const groupId = 'GROUP-ID1';

export const SingleSession = () => <SS
    soldOut={radios(label, options, defaultValue, groupId)==='soldOut'}
    notBookable={radios(label, options, defaultValue, groupId)==='notBookable'}
    sessionExpired={radios(label, options, defaultValue, groupId)==='sessionExpired'}>
        <SessionTime>10.30 AM</SessionTime>
        <SessionExperiences>
            <span>attr</span>
            <span>attr</span>
            <span>attr</span>
        </SessionExperiences>
    </SS>

