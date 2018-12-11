import React, { Component } from 'react';
import { render } from 'react-dom'
import TopMenu from './TopMenu'
import Navbar from './Navbar'



export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div className= ".navbar-expand-md header">
        <TopMenu />
	      <Navbar />
      </div>
		)
	}
}
