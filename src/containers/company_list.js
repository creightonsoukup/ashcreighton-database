import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { fetchVCs } from '../actions/index'

class CompanyList extends Component {

  componentWillMount(props) {
      this.props.fetchVCs();
  }

  renderVCs() {
    if(this.props.vcs[0]) {
      const data = this.props.vcs[0]
      return data.map((vc) => {
        return (
          <div key={vc.id} className="card blue-grey darken-1 col s12 m8 offset-m2">
            <div className="card-content white-text">
              <span className="card-title">{vc.name}</span>
              <p>General Info</p>
              <p> City: {vc.city}</p>
              <p> State: {vc.state}</p>
              <p> Country: {vc.country}</p>
              <p> Website: {vc.website}</p>
              <p> Year Founded: {vc.year_founded}</p>
              <p> Description: {vc.description}</p>
              <br/>
              <p>Investing Info</p>
              <p> Active Portfolio: {vc.active_portfolio}</p>
              <p> Investments: {vc.investments}</p>
              <p> Last Fund Size: {vc.last_fund_size}</p>
              <p> Investments Last Twelve Months: {vc.investments_last_twelve}</p>
              <p> Dry Powder: {vc.dry_powder}</p>
              <p> Investment Range Low: {vc.investment_range_low}</p>
              <p> Investment Range High: {vc.investment_range_high}</p>
            </div>
            <div className="card-action">
              <a href="#">Portfolio</a>
              <a href="#">Edit</a>
              <a href='#'>Website</a>
            </div>
          </div>
        )})
      } else {
        return <div> Loading... </div>
      }
  }

  render() {
    return (
    <div>
      <div className='row'>
        <h1>VC Database</h1>
      </div>
      <div className="row">
          {this.renderVCs()}
      </div>
    </div>
    )
  }
}

function mapStateToProps({ vcs }) {
  return {vcs}
}

export default connect(mapStateToProps, { fetchVCs })(CompanyList);
