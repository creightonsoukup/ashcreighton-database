import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVC } from '../actions/index'
import Navbar from './navbar'

import EditVCForm from '../containers/edit_vc_form'

class EditVC extends Component {
  componentWillMount() {
    this.props.fetchVC(this.props.params.id)
  }

  onSubmit() {

  }

  render() {
    if (!this.props.vc.length === 0) {
    return  <div>loading...</div>
    }
    return (
      <div>
        <Navbar />
        Edit VC Page
        <EditVCForm vc={this.props.vc} id={this.props.params.id} />
      </div>
    )
  }
}

function mapStateToProps({ vc }) {
  return { vc }
}

export default connect(mapStateToProps, { fetchVC })(EditVC)
