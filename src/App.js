import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 import MyAwesomeReactComponent from './mainpage';
 import MySearchComponent from './searchpage';




class App extends Component {  
  render() {

    return (
      <div>   
       <div>
      <MuiThemeProvider>
     <MyAwesomeReactComponent /> 
     {/* add below search component when we need to see search page  */}
    <MySearchComponent />
  </MuiThemeProvider>
      </div>
        </div >
     
     
    );
  }
}


export default App;

ReactDOM.render(<App />, document.getElementById('root'));





