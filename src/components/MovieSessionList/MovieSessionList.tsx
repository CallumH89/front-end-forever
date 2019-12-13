import * as React from 'react';
import styled from 'styled-components';
import { Times } from '../../types';
import { darken } from 'polished';

interface SessionListProps {
  date: string;
  times?: Times[];
}

interface SingleSessionProps {
  soldOut: boolean;
  notBookable: boolean;
  sessionExpired: boolean;
}

const SingleSession = styled('button')<SingleSessionProps>`
  border-radius: 5px;
  border: transparent;
  background: ${props =>
    props.notBookable || props.sessionExpired || props.soldOut
      ? props.theme.btnColorSecondary
      : props.theme.btnColorPrimary};
  color: ${props =>
    props.notBookable || props.sessionExpired || props.soldOut
      ? props.theme.btnColorPrimary
      : props.theme.btnColorSecondary};
  padding: 0.5rem;
  cursor: ${props =>
    props.notBookable || props.sessionExpired || props.soldOut
      ? ''
      : 'pointer'};
  :hover {
    background: ${props =>
      props.notBookable || props.sessionExpired || props.soldOut
        ? ''
        : darken(0.1, props.theme.btnColorPrimary)};
  }
`;

SingleSession.defaultProps = {
  theme: {
    btnColorPrimary: '#000',
    btnColorSecondary: '#fff'
  }
};

const MovieSessionList: React.FunctionComponent<SessionListProps> = props => {
  return (
    <div>
      <h4>{props.date}</h4>
      <div className='grid grid--4-col mt-1'>
        {props.times &&
          props.times.length > 0 &&
          props.times.map((singleSession, i) => (
            <SingleSession
              key={i}
              soldOut={singleSession.SoldOut}
              notBookable={singleSession.NotBookable}
              sessionExpired={singleSession.SessionExpired}
            >
              {singleSession.StartTime}
            </SingleSession>
          ))}
      </div>
    </div>
  );
};

export default MovieSessionList;
