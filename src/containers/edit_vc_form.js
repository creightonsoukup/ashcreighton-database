import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { updateVC } from '../actions/index'
import { Link } from 'react-router';
import _$ from 'jquery';

export default class EditVCForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillReceiveProps(newProps) {
    _$('#textarea1').trigger('autoresize');
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
