import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import filmdata interface and data
import { filmData } from './types';
import data from './data/data.json';
import { ThemeProvider } from "styled-components";
import boxofficeTheme from './themes/theme-boxoffice.json';
import "./scss/app.scss";
const theme = boxofficeTheme;
//define the movielist data and type of data to ensure it has correct values
const movieList: filmData[] = data;

ReactDOM.render(<ThemeProvider theme={theme}><App data={movieList} /></ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
