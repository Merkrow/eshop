import React, { Component } from 'react';
import { render } from 'react-dom'
import '../../styles/products.scss'

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div className= "image-container">
          <img src={this.props.imageList} className="main-image" />
	    </div>
		)
	}
}
