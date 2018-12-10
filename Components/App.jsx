import React, { Component } from 'react';
import { render } from 'react-dom'
import Header from './Header/Header'




export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div className= "container">
        <Header />
	    </div>
		)
	}
}
