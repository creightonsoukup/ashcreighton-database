import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

export default class AllStartups2 extends Component {


  renderStartups() {
    if(this.props.startups) {
      const startups = this.props.startups
      return startups.map((startup) => {
        return (
          <div key={startup.id} className="card blue-grey darken-1 col s12 m8 offset-m2">
            <div className="card-content white-text">
              <span className="card-title">{startup.name}</span>
              <p>General Info</p>
              <p> City: {startup.city}</p>
              <p> State: {startup.state}</p>
              <p> Country: {startup.country}</p>
              <p> Website: {startup.website}</p>
              <p> LinkedIn: {startup.year_founded}</p>
              <p> Facebook: {startup.facebook}</p>
              <p> Description: {startup.description}</p>
              <p> Twitter {startup.twitter}</p>
            </div>
            <div className="card-action">
              <button
                onClick={() => this.props.onStartupSelect(startup.id)}
              >Select</button>
            </div>
          </div>
        )})
      } else {
        return (
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        )
      }
  }

  render() {
    return (
    <div>
      <div className='row'>
      </div>
      <div className="row">
          {this.renderStartups()}
      </div>
    </div>
    )
  }
}
