import * as React from 'react';
import styled from 'styled-components';
import { Times } from '../../types';
import { Buttons, Button } from '../Button/Button';
import { SingleSession, SessionExperiences, SessionTime } from '../SingleSession/SingleSession';
import { Grid } from '@material-ui/core';

interface SessionListProps {
  date?: string;
  times?: Times[];
}


const SessionsContainer = styled('div')<SessionListProps>`
margin-top:auto;
padding-top:1rem;
 & ${Button} {
   margin-top:1rem;
 }
`;


const MovieGridSessionList: React.FunctionComponent<SessionListProps> = props => {
  return (
    <SessionsContainer data-testid="movie-sessions">
      <Grid container spacing={2}>
        {props.times &&
          props.times.length > 0 &&
          props.times.slice(0, 6).map((singleSession, i) => ( 
            <Grid item xs={4}>
              <SingleSession
                key={i}
                soldOut={singleSession.SoldOut}
                notBookable={singleSession.NotBookable}
                sessionExpired={singleSession.SessionExpired}
              >
                <SessionTime>{singleSession.StartTime}</SessionTime>
                {singleSession.Experience && 
                singleSession.Experience.length > 0 &&
                  <SessionExperiences>
                    {singleSession.Experience.map((experience, i) => (
                      <span>{experience.ExternalId}</span>
                    ))}
                  </SessionExperiences>
                }
              </SingleSession>
            </Grid>
          ))}
      </Grid>
      <Buttons fullWidth={true} text={"More Showtimes"} />
    </SessionsContainer>
  );
};

export default MovieGridSessionList;
