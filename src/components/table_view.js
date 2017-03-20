import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ReactDataGrid from 'react-data-grid'
import { Toolbar, Editors, Formatters, Selectors }  from 'react-data-grid-addons';


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

    if(this.props.data.length == 0 || !this.props.data) {
      <div>loading</div>
    }
    const columns = this.props.columns
    const rows = this.props.data
    const rowGetter = rowNumber => rows[rowNumber]
    const onRowSelect = rows => this.props.getRowSelection(rows)
    const onCellSelected = ({ rowIdx, idx }) => this.refs.grid.openCellEditor(rowIdx,idx)
    const handleGridRowsUpdated = row => this.setState({editRows: row})
    const onRowClick = (rowIdx, row) => {
      this.props.onRowClick(rowIdx, row)
    }
    return (
    <div className="table">
      <ReactDataGrid
      ref='grid'
      rowKey='id'
      enableRowSelect={this.props.select}
      columns={columns}
      rowsCount={rows.length}
      onAddFilter={this.handleFilterChange}
      rowGetter={rowGetter}
      enableCellSelect={this.props.rowSelect}
      toolbar={<Toolbar enableFilter={this.props.filterable}  onAddRow={this.handleAddRow} enableAddRow={this.props.addRow}/>}
      onRowSelect={onRowSelect}
      onGridRowsUpdated={handleGridRowsUpdated}
      minHeight={this.props.height}
      onRowClick={onRowClick}
      />
    </div>
    )
  }
}

export default TableView
