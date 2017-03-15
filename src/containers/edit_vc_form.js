import React, { Component, PropTypes } from 'react';
import { updateVC } from '../actions/index'
import { Link } from 'react-router';

export default class EditVCForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    this.props.updateVC(props)
      .then((data) => {
        this.context.router.push('/')
      })
  }


  render() {
    console.log(this.props.vc)
    return (
      <div>
        Edit VC Form
      </div>
    )
  }
}
