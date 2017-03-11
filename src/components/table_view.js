import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ReactDataGrid from 'react-data-grid'

class TableView extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedRows : [],
      editRows: [],
      clickedRow: []
    }
  }



  render() {

    if(this.props.data.length == 0) {
      <div>loading</div>
    }
    const columns = this.props.columns
    const rows = this.props.data
    const rowGetter = rowNumber => rows[rowNumber]
    const onRowSelect = rows => this.setState({ selectedRows: rows})
    const onCellSelected = ({ rowIdx, idx }) => this.refs.grid.openCellEditor(rowIdx,idx)
    const handleGridRowsUpdated = row => this.setState({editRows: row})
    // const onRowClick = row => this.setState({clickedRow: row})
    const onRowClick = (rowIdx, row) => {
      let selectedVCId = this.props.data[rowIdx].id
      this.context.router.push(`/portfolio/${selectedVCId}`)
    }
    console.log(this.state)
    return (
    <div>
      <ReactDataGrid
      ref='grid'
      rowKey='id'
      enableRowSelect={this.props.select}
      columns={columns}
      rowsCount={rows.length}
      rowGetter={rowGetter}
      enableCellSelect={true}
      onRowSelect={onRowSelect}
      onGridRowsUpdated={handleGridRowsUpdated}
      minHeight={600}
      onRowClick={onRowClick}
      />
    </div>
    )
  }
}

export default TableView
