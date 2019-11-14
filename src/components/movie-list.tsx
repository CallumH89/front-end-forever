import * as React from "react";
import styled from 'styled-components';
import {filmData, Sessions, Times} from '../types';
import { darken } from 'polished'

interface ListingProps {
    data: filmData[]
}

interface itemProps {
    title: string,
    filmId: number,
    poster?: string,
    sessions: Sessions[]
}

interface SessionListProps {
    date: string,
    times?: Times[]
}

interface SingleSessionProps {
  soldOut: boolean,
  notBookable: boolean,
  sessionExpired: boolean
}

const Container = styled.div`
  margin:2rem auto;
  width:600px; 
  display:block;
`;

const SingleItem = styled.div`
  grid-gap: 1rem;
  grid-template-columns: 200px auto;
`;

const Poster = styled.img`
  border-radius: 4px;
  width:100%;
  display:block;
  margin-bottom:0.5rem;`;


const SingleSession = styled("button")<SingleSessionProps>`
  border-radius:5px;
  border:transparent;
  background: ${props => (props.notBookable || props.sessionExpired || props.soldOut ? props.theme.btnColorSecondary : props.theme.btnColorPrimary)};
  color: ${props => (props.notBookable || props.sessionExpired || props.soldOut ? props.theme.btnColorPrimary : props.theme.btnColorSecondary)};
  padding:0.5rem;
  cursor: ${props => (props.notBookable || props.sessionExpired || props.soldOut ? '' : 'pointer')};
  :hover {
    background: ${props => (props.notBookable || props.sessionExpired || props.soldOut ? '' : darken(0.1, props.theme.btnColorPrimary))};
  }
`;

SingleSession.defaultProps = {
  theme: {
    btnColorPrimary: '#000',
    btnColorSecondary: '#fff',
  }
};

const SessionList: React.FunctionComponent<SessionListProps> = props => {
  return (
    <div>
      <h4>{props.date}</h4>
      <div className="grid grid--4-col mt-1">
         {props.times &&
          props.times.length > 0 &&
          props.times.map((singleSession, i) => (
            <SingleSession
              key={i}
              soldOut={singleSession.SoldOut}
              notBookable={singleSession.NotBookable}
              sessionExpired={singleSession.SessionExpired}>
              {singleSession.StartTime}     
            </SingleSession>
          ))}
      </div>
    </div>
  );
}


const Item: React.FunctionComponent<itemProps> = props => {
    return (
        <SingleItem className="grid mb-2">
          <div>
            <Poster src={props.poster} alt={props.title} />
          </div>
          <div>
            <h2>{props.title}</h2>
            {props.sessions.map((sessionList, i) => (
                <SessionList
                  key={i}
                  date={sessionList.DisplayDate}
                  times={sessionList.Times}
                  />
            ))}
          </div>
          </SingleItem>
      );
}

const List: React.FunctionComponent<ListingProps> = props => {

  return (
    <Container>
      {props.data.map((singleFilm, i) => (
           <Item
            key={i}
            title={singleFilm.Title}
            poster={singleFilm.MediaItems.Poster}
            sessions={singleFilm.Sessions}
            filmId={singleFilm.FilmId}/>
      ))}
    </Container>
  );
} 


export default List;