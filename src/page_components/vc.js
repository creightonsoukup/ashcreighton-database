import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchVCs, updateVC } from '../actions/index'

import TableView from '../components/table_view'
import Navbar from '../components/navbar'
import GeneralSearchBar from '../containers/general_searchbar'

class VCs extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props);

    this.state = {
      vcs: []
    }

    this.onRowClick = this.onRowClick.bind(this)
    this.filterCompanies = this.filterCompanies.bind(this)
  }

  componentWillMount(props) {
    this.props.fetchVCs();
  }

  onRowClick(rowIdx, row) {
    console.log(rowIdx, row)
    this.context.router.push(`/portfolio/${row.id}`)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({vcs:nextProps.vcs[0]})
  }

  filterCompanies(term) {

  }

  render() {
    if (this.state.vcs.length === 0) {
      return <div>loading</div>
    }
    const vcs = this.props.vcs[0]
    const columns = [{
      key: 'id',
      name: 'ID',
      resizable: true,
      editable: true,
      width: 50
    },
    {
      key: 'name',
      name: 'Name',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'city',
      name: 'City',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'state',
      name: 'State',
      resizable: true,
      editable: true,
      width: 75
    },
    {
      key: 'country',
      name: 'Country',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'website',
      name: 'Website',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'year_founded',
      name: 'Year Founded',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'description',
      name: 'Description',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'active_portfolio',
      name: 'Active Portfolio',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'investments',
      name: 'Investments',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'last_fund_size',
      name: 'Last Fund Size',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'last_fund_date',
      name: 'Last Fund Date',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'investments_last_twelve',
      name: 'Investments Last Twelve',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'dry_powder',
      name: 'Dry Powder',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'investment_range_low',
      name: 'Investment Range Low',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'investment_range_high',
      name: 'Investment Range High',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'exits',
      name: 'Exits',
      resizable: true,
      editable: true,
      width: 200
    }]
    return (
      <div>
        <Navbar />
        <GeneralSearchBar
        onSearchTermChange={this.filterCompanies}
        showButton={false}
        button={'Add New VC'}
        placeholder={'Search VC Database'}
         />
        <TableView
        onRowClick={this.onRowClick}
        data={vcs}
        height={800}
        columns={columns}/>
      </div>
    )
  }
}

function mapStateToProps({ vcs }) {
  return {vcs}
}


export default connect(mapStateToProps, { fetchVCs, updateVC })(VCs)
