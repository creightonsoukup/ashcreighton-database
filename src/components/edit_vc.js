import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { fetchVC, updateVC } from '../actions/index'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _$ from 'jquery';

class EditVc extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    console.log(this.props)
    this.props.fetchVC(this.props.params.id)
  }

  onSubmit(props) {
    console.log(this.props)
    this.props.updateVC()
      .then((data) => {
        console.log(data)
        this.content.push('/')
      })
  }
  renderForm(vcData) {

    return (
      <div key={vcData[0].id}>
        <h3>Update {vcData[0].name}</h3>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12 m7">
                <Field id="disabled" name="id" disabled defaultValue={vcData[0].id} type="text"/>
                <label>ID</label>
              </div>
              <div className="input-field col s12 m7">
                <Field  name="name" defaultValue={vcData[0].name} type="text"/>
                <label>Name</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name='city' defaultValue={vcData[0].city} type="text"/>
                <label>City</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="state" defaultValue={vcData[0].state} type="text"/>
                <label>State</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="country" id="country" defaultValue={vcData[0].country} type="text"/>
                <label>Country</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="website" id="website" defaultValue={vcData[0].website} type="text"/>
                <label>Website</label>
              </div>
              <div className="input-field col s12 m7">
                <textarea name="description" className="materialize-textarea" id="textarea1" defaultValue={vcData[0].description} type="text"></textarea>
                <label>Description</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="last_fund_date" defaultValue={vcData[0].last_fund_date} type="date" className="datepicker"/>
                <label>Last Fund Date</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="investments_last_twelve" defaultValue={vcData[0].investments_last_twelve} type="text"/>
                <label>Investments Last Twelve Months</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="active_portfolio" defaultValue={vcData[0].active_portfolio} type="text"/>
                <label>Active Portolio</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="last_fund_size" defaultValue={vcData[0].last_fund_size} type="text"/>
                <label>Last Fund Size</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="dry_powder" defaultValue={vcData[0].dry_powder} type="text"/>
                <label>Dry Powder</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="exits" defaultValue={vcData[0].exits} type="text"/>
                <label>Exits</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="year_founded" defaultValue={vcData[0].year_founded} type="text"/>
                <label>Year Founded</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="investment_range_low" defaultValue={vcData[0].investment_range_low} type="text"/>
                <label>Investment Lower Range</label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="investment_range_high" defaultValue={vcData[0].investment_range_high} type="text"/>
                <label>Investment Upper Range </label>
              </div>
              <div className="input-field col s12 m7">
                <Field name="investments" defaultValue={vcData[0].investments} type="text"/>
                <label>Investments</label>
              </div>
              <div className="row">
                <div className="input-field col s6 m6">
                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                  </button>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }

  render() {
    const { handleSubmit, load, pristine, reset, submitting } = this.props
    if (!this.props.vc) {
      return <div> Loading...</div>
    }
    _$('#textarea1').trigger('autoresize');


    return (
      <form onSubmit={handleSubmit}>
        {this.props.vc.map(this.renderForm)}
      </form>
      )
  }
}


function mapStateToProps(state) {
  return {vc: state.vc ,
          updateVc: state.updateVc 
        }
}

EditVc = (EditVc)

export default reduxForm({
    form: 'UpdateVC',
    fields: ['name', 'city', 'state', 'country', 'website', 'description', 'investments_last_twelve', 'active_portfolio', 'last_fund_size', 'last_fund_date', 'dry_powder', 'exits', 'year_founded', 'investment_range_low', 'investment_range_high', 'investments']
  }, mapStateToProps, { fetchVC, updateVC }
)(EditVc)
