import React, { Component } from 'react';
import { render } from 'react-dom'
import '../../styles/products.scss'
import ImageContainer from './ImageContainer'

const IMAGELIST = [
'https://static.e-stradivarius.net/5/photos2/2019/V/0/1/p/6366/806/506/01/6366806506_1_1_2.jpg?t=1544461973722',
'https://static.e-stradivarius.net/5/photos2/2019/V/0/1/p/6366/806/506/01/6366806506_2_1_2.jpg?t=1544461973722',
'https://static.e-stradivarius.net/5/photos2/2019/V/0/1/p/6366/806/506/01/6366806506_2_2_2.jpg?t=1544461973722'
]

export default class MainPictureBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div className= "col-md-6">
        {IMAGELIST.map(e => <ImageContainer imageList={e}/>)}
	    </div>
		)
	}
}
