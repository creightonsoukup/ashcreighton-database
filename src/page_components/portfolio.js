import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio, fetchVC } from '../actions/index'
import Navbar from '../components/navbar'
import GeneralSearchBar from '../containers/general_searchbar'
import TableView from '../components/table_view'

class Portfolio extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(props) {
    this.props.fetchPortfolio(this.props.params.id)
    this.props.fetchVC(this.props.params.id)
  }



  render() {
    if(this.props.vc.length == 0) {
      return <div>loading...</div>
    }
    const vc = this.props.vc[0][0]
    const id = this.props.params.id
    const portfolio = this.props.portfolio[0]
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
    console.log(portfolio, vc)
    return (
      <div>
        <Navbar />
        <GeneralSearchBar
        onClick={() => this.context.router.push(`/portfolio/add/${id}`)}
        button={'Portfolio Company'}/>
        <h3>{vc.name} Portfolio</h3>
        <TableView
         data={portfolio}
         columns={columns}
         select={"single"}/>
      </div>
    )
  }
}

function mapStateToProps({portfolio, vc}) {
  return { portfolio, vc }
}

export default connect(mapStateToProps, { fetchPortfolio, fetchVC })(Portfolio)
