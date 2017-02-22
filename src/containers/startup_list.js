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
      const startup = this.props.startup[0].data.items[0].properties
      const facebook = startup.facebook_url
      const twitter = startup.twitter_url
      const linkedin = startup.linkedin_url
      const description = startup.short_description
      const name = startup.name
      const city = startup.city_name
      const state = startup.region_name
      const website = startup.homepage_url
      const verticle = []
      const round = ''
      const date = ''
      const lead = ''
      console.log(name)
      return (
        <div>
          <h1>{facebook}</h1>
        </div>
      )
    } else {
      return (
        <div>
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
