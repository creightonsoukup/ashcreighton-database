import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addInvestment } from '../actions/index'

class ConnectPortfolioForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addInvestment(this.props.vcId, this.props.startupId,
    this.round.value, this.date.value, this.lead.value)
      .then((data) => {
        console.log(data.payload.status)
        if(data.payload.status === 200)
          this.context.router.push(`/portfolio/${this.props.vcId}`)
      })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className="col s12">
            <div className='input-field col s12 m10'>
              <label className='active'>Round</label>
              <input
              name='round'
              type='text'
              ref={(round) => this.round = round} />
            </div>
            <div className='input-field col s12 m7'>
              <label className='active'>Date of Investment</label>
              <input
              name='date'
              type='date'
              className='datepicker'
              ref={(date) => this.date = date} />
            </div>
            <div className='input-field col s12 m7'>
              <label className='active'>Lead</label>
              <input
                name='lead'
                type='text'
                id='lead'
                ref={(lead) => this.lead = lead}/>
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



export default connect(null, { addInvestment })(ConnectPortfolioForm)
