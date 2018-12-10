import React, { Component } from 'react';
import { render } from 'react-dom'
import LogoMenuComponent from './LogoMenuComponent'
import SearchMenuComponent from './SearchMenuComponent'
import EmptyMenuComponent from './EmptyMenuComponent'



export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div className= "row .navbar-expand-md">
        <SearchMenuComponent />
        <LogoMenuComponent />
	      <EmptyMenuComponent/>
      </div>
		)
	}
}
