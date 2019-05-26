import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './component/TestComponent';
import Login from './component/AppComponent/login';
import './stylesheets/main.scss';
import NavBar from './component/NavBar/NavBar';
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Login />
      </>
    )
  }
}

export default App
