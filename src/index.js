import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MySearchComponent from './searchpage';
import registerServiceWorker from './registerServiceWorker';


 ReactDOM.render(<App />, document.getElementById('root'));
 

registerServiceWorker();


