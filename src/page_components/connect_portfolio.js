import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStartups } from '../actions/index';
import Navbar from '../components/navbar';
import TableView from '../components/table_view'


class ConnectPortfolio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startups: [],
      selectedStartupId: null
    }
  }

  componentWillMount(props) {
    this.props.fetchStartups()
  }

  componentWillReceiveProps(nextProps) {
    const startupsArray = nextProps.allStartups[0]
    this.setState({startups: startupsArray})
  }

  render() {

    if (this.state.startups.length < 1 ) {
      return <div>loading</div>
    }
    console.log(this.state.startups)
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
          <Navbar/>
          <TableView
          columns={columns}
          data={this.state.startups}
          select={'multi'} />
        </div>
      )

  }
}

function mapStateToProps({allStartups}) {
  return {allStartups}
}

export default connect(mapStateToProps, { fetchStartups })(ConnectPortfolio)
