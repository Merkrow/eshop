import React, { Component } from 'react';
import { render } from 'react-dom'
import ImagePreviewContainer from './ImagePreviewContainer'

const IMAGELIST = [
'https://static.e-stradivarius.net/5/photos2/2019/V/0/1/p/6366/806/506/01/6366806506_1_1_2.jpg?t=1544461973722',
'https://static.e-stradivarius.net/5/photos2/2019/V/0/1/p/6366/806/506/01/6366806506_2_1_2.jpg?t=1544461973722',
'https://static.e-stradivarius.net/5/photos2/2019/V/0/1/p/6366/806/506/01/6366806506_2_2_2.jpg?t=1544461973722'
]

export default class SidePicturesBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div className= "col-md-2 col-xs-2 preview-side-bar">
          {IMAGELIST.map(e => <ImagePreviewContainer imageList={e}/>)}
	    </div>
		)
	}
}
