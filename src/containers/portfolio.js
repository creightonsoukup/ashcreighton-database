import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import fetchPortfolio from '../actions/index'

class Portfolio extends Component {

  render() {
    const id = this.props.params.id
    return (
      <div>
        test
        <Link to={`/portfolio/new/${id}`}>Portfolio</Link>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {portfolio: state.portfolio }
}

export default connect(mapStateToProps, { fetchPortfolio })(Portfolio)
