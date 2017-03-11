import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchStartups } from '../actions/index'


import StartupDatabaseSearch from '../containers/startup_database_search'
import TableView from '../components/table_view'
import Navbar from '../components/navbar'

class Startups extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      startups: [],
      filtered_startups: [],
    }
  }
  componentWillMount(props) {
      this.props.fetchStartups()
        .then((data) => {
          console.log(data)
          this.setState({startups: data.payload.data})
        })
  }

  render() {
    if(this.props.allStartups == 0) {
      return <div>loading</div>
    }
    const startups = this.props.allStartups[0]
    const columns = [{
      key: 'id',
      name: 'ID',
      resizable: true,
      editable: true
    },
    {
      key: 'name',
      name: 'Name',
      resizable: true,
      editable: true
    },
    {
      key: 'city',
      name: 'City',
      resizable: true,
      editable: true
    },
    {
      key: 'state',
      name: 'State',
      resizable: true,
      editable: true
    },
    {
      key: 'country',
      name: 'Country',
      resizable: true,
      editable: true
    },
    {
      key: 'year_founded',
      name: 'Year Founded',
      resizable: true,
      editable: true
    },
    {
      key: 'website',
      name: 'Website',
      resizable: true,
      editable: true
    },
    {
      key: 'description',
      name: 'Description',
      resizable: true,
      editable: true
    },
    {
      key: 'twitter',
      name: 'Twitter',
      resizable: true,
      editable: true
    },
    {
      key: 'facebook',
      name: 'Facebook',
      resizable: true,
      editable: true
    },
    {
      key: 'linkedin',
      name: 'LinkedIn',
      resizable: true,
      editable: true
    }]
    return (
      <div>
        <Navbar />
        <TableView
          data={startups}
          columns={columns}
          select={'single'}/>
      </div>
    )
  }
}

function mapStateToProps({allStartups}) {
  return {allStartups}
}

export default connect(mapStateToProps, { fetchStartups })(Startups);
