import * as React from 'react';
import { Times } from '../../types';
import { SingleSession, SessionExperiences, SessionTime } from '../SingleSession/SingleSession';

interface SessionListProps {
  date: string;
  times?: Times[];
}


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
          ))}
      </div>
    </div>
  );
};

export default MovieSessionList;
