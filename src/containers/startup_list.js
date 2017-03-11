import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import _$ from 'jquery';
import { addPortfolio } from '../actions/index'


class StartupList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props)
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWilMount() {

  _$(document).ready(function() {
    Materialize.updateTextFields();

  });
    _$('#textarea1').trigger('autoresize');
    _$('#textarea1').val('New Text');
    _$('select').material_select();
    _$('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }

  handleSubmit(event) {

    event.preventDefault()
    console.log("hello")
    this.props.addPortfolio(this.props.id, this.name.value, this.facebook.value,
    this.twitter.value, this.linkedin.value, this.description.value, this.city_name.value,
    this.region.value, this.website.value, this.vertical.value)
      .then((data) => {
        this.context.router.push(`/startups`)
      })
  }



  handleInputChange(event) {

    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name

    this.setState({
      [name]: value
    })
  }




  render() {
    if (!this.props.startup[0]) {

      // console.log(name)
      return (
        <div>

        </div>
      )
    } else {
      const startup = this.props.startup[0].data.items[0].properties
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className='row'>
              <div className='col s12'>
                <div className='input-field col s12 m7'>
                  <label className='active'>Name</label>
                  <input
                  name='name'
                  type='text'
                  defaultValue={startup.name}
                  ref={(name) => this.name = name} />
                </div>
                <div className='input-field col s12 m7'>
                  <label className="active">City</label>
                  <input
                  name='city'
                  type='text'
                  defaultValue={startup.city_name}
                  ref={(city_name) => this.city_name = city_name} />
                </div>
                <div className='input-field col s12 m7'>
                  <label className='active'>State</label>
                  <input
                  name='state'
                  type='text'
                  defaultValue={startup.region_name}
                  ref={(region) => this.region = region}/>
                </div>
                <div className='input-field col s12 m7'>
                  <label className='active'>Website</label>
                  <input
                  name='website'
                  type='text'
                  defaultValue={startup.domain}
                  ref={(website) => this.website = website} />
                </div>
                <div className='input-field col s12 m7'>
                  <label className='active'>Description</label>
                  <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  name='description'
                  type='text'
                  defaultValue={startup.short_description}
                  ref={(description) => this.description = description} ></textarea>
                </div>
                <div className='input-field col s12 m7'>
                  <label className='active'>Facebook</label>
                  <input
                  name='facebook'
                  type='text'
                  defaultValue={startup.facebook_url}
                  ref={(facebook) => this.facebook = facebook}/>
                </div>
                <div className='input-field col s12 m7'>
                  <label className='active'>Twitter</label>
                  <input
                  name='twitter'
                  type='text'
                  defaultValue={startup.twitter_url}
                  ref={(twitter) => this.twitter = twitter}/>
                </div>
                <div className='input-field col s12 m7'>
                  <label className='active'>LinkedIn</label>
                  <input
                  name='linkedin'
                  type='text'
                  defaultValue={startup.linkedin_url}
                  ref={(linkedin) => this.linkedin = linkedin} />
                </div>
                <div className='input-field col s12 m7'>
                  <label className='active'>Verticle</label>
                  <select
                  name='verticle'
                  type='text'
                  ref={(vertical) => this.vertical = vertical} ></select>
                </div>
                <div className="input-group-btn col s12 m7">
                  <button type="submit" className="btn btn-secondary">Add To Database</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
}

function mapStateToProps({ startup, addPortfolio }) {
  return { startup, addPortfolio }
}

export default connect(mapStateToProps, { addPortfolio })(StartupList);
