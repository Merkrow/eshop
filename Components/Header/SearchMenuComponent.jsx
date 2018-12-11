import React, { Component } from 'react';
import { render } from 'react-dom'
import '../../styles/navbar.scss';



export default class SearchMenuComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div className="logobar search input-group col-md-3">

        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Search</span>
        </div>
        <input type="text" class="form-control" aria-describedby="basic-addon1" />

      </div>
		)
	}
}
