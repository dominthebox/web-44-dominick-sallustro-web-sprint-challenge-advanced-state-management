import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


import { connect } from 'react-redux';
import { fetchStart, fetchSuccess } from './actions';
import axios from "axios";

class App extends Component {
  render() {
  
    this.props.fetchStart();
    axios.get(`http://localhost:3333/smurfs`)
      .then(res=> {
        this.props.fetchSuccess(res.data);
      })
    
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}



export default connect(null, {fetchStart, fetchSuccess})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.