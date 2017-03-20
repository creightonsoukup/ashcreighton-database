import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchVCs, updateVC, deleteVCs } from '../actions/index'
import TableView from '../components/table_view'
import Navbar from '../components/navbar'
import GeneralSearchBar from '../containers/general_searchbar'
import { Button } from 'reactstrap'

class VCs extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props);

    this.state = {
      vcs: [],
      editable: false,
      selectedRows: []
    }

    this.onRowClick = this.onRowClick.bind(this)
    this.getRowSelection = this.getRowSelection.bind(this)
    this.filterCompanies = this.filterCompanies.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.deleteVCs = this.deleteVCs.bind(this)
  }

  componentWillMount(props) {
    this.props.fetchVCs();
  }

  onButtonClick() {
    this.setState({editable:!this.state.editable})
  }

  onRowClick(rowIdx, row) {
    console.log(rowIdx, row)
    this.context.router.push(`/portfolio/${row.id}`)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({vcs:nextProps.vcs[0]})
  }

  getRowSelection(rows) {
    this.setState({selectedRows: rows})
  }

  deleteVCs() {
    this.props.deleteVCs(this.state.selectedRows)
    this.setState({selectedRows: []})
  }

  filterCompanies(term) {

  }

  render() {
    console.log(this.state)
    if (this.state.vcs.length === 0) {
      return <div className='loader'>Loading...</div>
    }
    const vcs = this.props.vcs[0]
    const columns = [{
      key: 'id',
      name: 'ID',
      resizable: true,
      editable: true,
      width: 50,
      filterable: true
    },
    {
      key: 'name',
      name: 'Name',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'city',
      name: 'City',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'state',
      name: 'State',
      resizable: true,
      editable: true,
      width: 75,
      filterable: true
    },
    {
      key: 'country',
      name: 'Country',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'website',
      name: 'Website',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'year_founded',
      name: 'Year Founded',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'description',
      name: 'Description',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'active_portfolio',
      name: 'Active Portfolio',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'investments',
      name: 'Investments',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'last_fund_size',
      name: 'Last Fund Size',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'last_fund_date',
      name: 'Last Fund Date',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'investments_last_twelve',
      name: 'Investments Last Twelve',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'dry_powder',
      name: 'Dry Powder',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'investment_range_low',
      name: 'Investment Range Low',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'investment_range_high',
      name: 'Investment Range High',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    },
    {
      key: 'exits',
      name: 'Exits',
      resizable: true,
      editable: true,
      width: 200,
      filterable: true
    }]
    return (
      <div>
        <Navbar
        title="VC Database" />
        <GeneralSearchBar
        onSearchTermChange={this.filterCompanies}
        showButton={true}
        onClick={this.onButtonClick}
        button={this.state.editable === false ? "Edit VCs" : "Done"}
        placeholder={'Search VC Database'}
         />
        { this.state.editable && (
          <div>
          <Button onClick={this.deleteVCs}>Delete</Button>
          <TableView
          onRowClick={null}
          data={vcs}
          addRow={true}
          filterable={true}
          getRowSelection={this.getRowSelection}
          height={800}
          select={'multi'}
          columns={columns}/>
          </div>
        )}
        { this.state.editable === false &&
          <TableView
          onRowClick={null}
          data={vcs}
          filterable={true}
          addRow={false}
          onRowClick={this.onRowClick}
          height={800}
          columns={columns}/>
        }
      </div>
    )
  }
}

function mapStateToProps({ vcs }) {
  return {vcs}
}


export default connect(mapStateToProps, { fetchVCs, updateVC, deleteVCs })(VCs)
