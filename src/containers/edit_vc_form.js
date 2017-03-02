import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { updateVC } from '../actions/index'
import { Link } from 'react-router';
import _$ from 'jquery';

class EditVCForm extends Component {
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
    const { fields: {id, name, city, state, country, website, description, last_fund_date, investments_last_twelve, active_portfolio, last_fund_size, dry_powder, exits, year_founded, investment_range_low, investment_range_high, investments }, handleSubmit } = this.props
    if (!this.props.vc) {
      return <div> Loading...</div>
    }
    const vc = this.props.vc
    console.log(vc)
    return (
      <form>
        <h3>Update {vc.name}</h3>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12 m7">
                <input className="form-control" id="disabled" {...id} disabled defaultValue={vc.id} type="text"/>
                <label>ID</label>
              </div>
              <div className="input-field col s12 m7">
                <input  {...name} defaultValue={vc.name} type="text"/>
                <label>Name</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...city} defaultValue={vc.city} type="text"/>
                <label>City</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...state} defaultValue={vc.state} type="text"/>
                <label>State</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...country} id="country" defaultValue={vc.country} type="text"/>
                <label>Country</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...website} id="website" defaultValue={vc.website} type="text"/>
                <label>Website</label>
              </div>
              <div className="input-field col s12 m7">
                <textarea {...description} className="materialize-textarea" id="textarea1" defaultValue={vc.description} type="text"></textarea>
                <label>Description</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...last_fund_date} defaultValue={vc.last_fund_date} type="date" className="datepicker"/>
                <label>Last Fund Date</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...investments_last_twelve} defaultValue={vc.investments_last_twelve} type="text"/>
                <label>Investments Last Twelve Months</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...active_portfolio} defaultValue={vc.active_portfolio} type="text"/>
                <label>Active Portolio</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...last_fund_size} defaultValue={vc.last_fund_size} type="text"/>
                <label>Last Fund Size</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...dry_powder} defaultValue={vc.dry_powder} type="text"/>
                <label>Dry Powder</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...exits} defaultValue={vc.exits} type="text"/>
                <label>Exits</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...year_founded} defaultValue={vc.year_founded} type="text"/>
                <label>Year Founded</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...investment_range_low} defaultValue={vc.investment_range_low} type="text"/>
                <label>Investment Lower Range</label>
              </div>
              <div className="input-field col s12 m7">
                <input {...investment_range_high} defaultValue={vc.investment_range_high} type="text"/>
                <label>Investment Upper Range </label>
              </div>
              <div className="input-field col s12 m7">
                <input {...investments} defaultValue={vc.investments} type="text"/>
                <label>Investments</label>
              </div>
              <div className="row">
                <div className="input-field col s6 m6">
                  <button className="btn waves-effect waves-light" type="submit"  >Submit
                  </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      )
  }
}

export default reduxForm({
  form: 'EditVC',
  fields: ['id','name', 'city', 'state', 'country', 'website', 'description', 'last_fund_date', 'investments_last_twelve', 'active_portfolio', 'last_fund_size', 'dry_powder', 'exits', 'year_founded', 'investment_range_low', 'investment_range_high', 'investments']
}, null, { updateVC })(EditVCForm);
