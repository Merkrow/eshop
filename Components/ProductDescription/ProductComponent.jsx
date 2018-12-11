import React, { Component } from 'react';
import { render } from 'react-dom'
import InfoBlock from './InfoBlock'
import MainPictureBlock from './MainPictureBlock'
import SidePicturesBlock from './SidePicturesBlock'



export default class ProductComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div className= "row col-12">
        <SidePicturesBlock />
        <MainPictureBlock />
        <InfoBlock />
	    </div>
		)
	}
}
