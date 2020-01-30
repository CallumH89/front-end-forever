import * as React from 'react';
import './scss/app.scss';

import { MovieCarousel } from './components/MovieCarousel/MovieCarousel';
import { filmData } from './types';

interface AppProps {
  data: filmData[];
  settings: {};
}

const App: React.FunctionComponent<AppProps> = props => {
  return <MovieCarousel settings={props.settings} data={props.data} />;
};

export default App;
