import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));

//getElementById is that it only allows to select an element by its id. 
//The querySelector method can be used in other situations as well, 
//such as when selecting by element name, nesting, or class name.

ReactDOM.render(<App />, document.querySelector('#root'));

