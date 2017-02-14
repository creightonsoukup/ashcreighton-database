import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';


class StartupList extends Component {

  // onSubmit(props) {
  //   this.props.addStartup(props)
  //     .then(() => {
  //       this.context.router.push('/')
  //     })
  // }

  render() {
    if (this.props.startup[0]) {
      const facebook = this.props.startup[0].data.items[0].properties.facebook_url
      const twitter = this.props.startup[0].data.items[0].properties.twitter_url
      const linkedin = this.props.startup[0].data.items[0].properties.linkedin_url
      const description = this.props.startup[0].data.items[0].properties.short_description
      const name = this.props.startup[0].data.items[0].properties.name
      const city = this.props.startup[0].data.items[0].properties.city_name
      const state = this.props.startup[0].data.items[0].properties.region_name
      const website = this.props.startup[0].data.items[0].properties.homepage_url
      const verticle = []
      const round = ''
      const date = ''
      const lead = ''

      return (
        <div className="container">
          <h2 className="row">Results</h2>
          <div className="row">
            <div className="col-sm-6">
              <form>

              </form>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Results</h2>
          <div>Please search for a related startup</div>
        </div>
      )
    }
  }
}

function mapStateToProps({ startup }) {
  console.log({ startup })
  return { startup }
}

export default connect(mapStateToProps)(StartupList);
