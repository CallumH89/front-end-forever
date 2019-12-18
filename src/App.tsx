import * as React from 'react';
import './scss/app.scss';
import { MovieList } from './components';
import { filmData } from './types';

interface AppProps {
  data: filmData[];
}

const App: React.FunctionComponent<AppProps> = props => {
  return <MovieList data={props.data} />;
};

export default App;
