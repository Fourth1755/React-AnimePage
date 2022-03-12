import logo from './logo.svg';
import { Component } from 'react';
import Navbaranime from './Navbaranime';
import Tapper from './Tapper';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import "./App.css"
import ProfileComponent from "./ProfileComponent"
import AddanimeComponent from "./AddanimeComponent"
import Main1 from './Main1';
import Form from './Form';
const App=()=> {
  return (
    <div>
      <Form/>
    </div>
  );
}

export default App;
