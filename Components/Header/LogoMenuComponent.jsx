import React, { Component } from 'react';
import { render } from 'react-dom'
import '../../styles/navbar.scss';

const LOGOLINK =  'YOUR LOGO';

export default class LogoBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div className="header col-md-6 nav justify-content-center">
        <a href="#">{LOGOLINK}</a>
      </div>
		)
	}
}
