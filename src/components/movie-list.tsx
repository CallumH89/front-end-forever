import * as React from "react";
import styled from 'styled-components';
import {filmData} from '../types';

interface ListingProps {
    data: filmData[]
}
interface itemProps {
    title: string,
    filmId: number
}
const Container = styled.div`
  margin:0 auto;
  width:600px; 
  display:block;
`;

const SingleItem = styled("div")`
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem;
`;

Container.defaultProps = {
  theme: {
  }
};

const Item: React.FunctionComponent<itemProps> = props => {
    return (
        <SingleItem className="grid grid--2-col">
          <div>{props.title}</div>
          <div className="ta__right">{props.filmId}</div>
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
            filmId={singleFilm.FilmId}/>
      ))}
    </Container>
  );
} 


export default List;