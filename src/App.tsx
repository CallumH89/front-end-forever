import * as React from "react";
import './scss/app.scss';
import List from './components/movie-list';
import { filmData } from './types';

interface AppProps {
  data: filmData[]
}

const App: React.FunctionComponent<AppProps> = props => {
  return (
          <List data={props.data} />
  );
}

export default App;