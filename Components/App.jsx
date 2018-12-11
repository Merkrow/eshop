import React, { Component } from 'react';
import { render } from 'react-dom'
import Header from './Header/Header'
import ProductComponent from './ProductDescription/ProductComponent'




export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div className= "container">
        <Header />
        <ProductComponent />
	    </div>
		)
	}
}
