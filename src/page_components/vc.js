import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVCs, updateVC } from '../actions/index'

import TableView from '../components/table_view'
import Navbar from '../components/navbar'

class VCs extends Component {

  componentWillMount(props) {
    this.props.fetchVCs();
  }

  render() {
    if (this.props.vcs.length == 0) {
      return <div>loading</div>
    }
    const vcs = this.props.vcs[0]
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
      key: 'website',
      name: 'Website',
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
      key: 'description',
      name: 'Description',
      resizable: true,
      editable: true
    },
    {
      key: 'active_portfolio',
      name: 'Active Portfolio',
      resizable: true,
      editable: true
    },
    {
      key: 'investments',
      name: 'Investments',
      resizable: true,
      editable: true
    },
    {
      key: 'last_fund_size',
      name: 'Last Fund Size',
      resizable: true,
      editable: true
    },
    {
      key: 'investments_last_twelve',
      name: 'Investments Last Twelve',
      resizable: true,
      editable: true
    },
    {
      key: 'dry_powder',
      name: 'Dry Powder',
      resizable: true,
      editable: true
    },
    {
      key: 'investment_range_low',
      name: 'Investment Range Low',
      resizable: true,
      editable: true
    },
    {
      key: 'investment_range_high',
      name: 'Investment Range High',
      resizable: true,
      editable: true
    }]
    return (
      <div>
        <Navbar />
        <TableView
        data={vcs}
        columns={columns}/>
      </div>
    )
  }
}

function mapStateToProps({ vcs }) {
  return {vcs}
}


export default connect(mapStateToProps, { fetchVCs, updateVC })(VCs)
