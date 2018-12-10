import React, { Component } from 'react';
import { render } from 'react-dom'
import '../../styles/navbar.scss';


const TOPMENU =  ['button 1', 'button 2','button 3','button 4','button 5'];

export default class Navbar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
		return (
      <div className= "navbar col-md-12 nav justify-content-center">
	      <ul>
          {TOPMENU.map(item => <li><a href="#">{item}</a></li>)}
        </ul>
      </div>
		)
	}
}
