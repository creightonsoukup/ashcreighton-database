import React, { Component } from 'react';
import { connect } from 'react-redux'


export default class GeneralSearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
      <nav>
        <div className="nav-wrapper row">
          <form className="col s6">
            <div>
              <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </div>
          </form>
          <ul right className="right col s3">
            <li><button
            onClick={this.props.onClick}
            className="waves-effect waves-light btn-large">Add New {this.props.button}</button></li>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}
