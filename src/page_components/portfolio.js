import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio, fetchVC } from '../actions/index'
import Navbar from '../components/navbar'
import GeneralSearchBar from '../containers/general_searchbar'
import TableView from '../components/table_view'
import AddPortfolioCompany from '../components/connect_portfolio'
import { Collapse } from 'reactstrap'

class Portfolio extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      collapse: false
    }

    this.clickToCollapse = this.clickToCollapse.bind(this)
  }

  componentWillMount(props) {
    this.props.fetchPortfolio(this.props.params.id)
    this.props.fetchVC(this.props.params.id)
  }

  clickToCollapse() {
    this.setState({collapse: !this.state.collapse})
  }



  render() {
    if(this.props.vc.length === 0 || this.props.portfolio.length === 0)  {
      return <div>loading...</div>
    }
    const vc = this.props.vc[0][0]
    const id = this.props.params.id
    const portfolio = this.props.portfolio[0]
    const columns = [{
      key: 'id',
      name: 'ID',
      resizable: true,
      editable: true,
      width: 200
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
      width: 200
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
      key: 'description',
      name: 'Description',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'twitter',
      name: 'Twitter',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'facebook',
      name: 'Facebook',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'linkedin',
      name: 'LinkedIn',
      resizable: true,
      editable: true,
      width: 200
    },
    {
      key: 'profile_image',
      name: 'Profile Images',
      resizable: true,
      editable: true,
      width: 200
    },{
      key: 'domain',
      name: 'Domain',
      resizable: true,
      editable: true,
      width: 200
    }]
    return (
      <div>
        <Navbar />
        <GeneralSearchBar
        onClick={this.clickToCollapse}
        showButton={true}
        button={'Add Portfolio Companies'}/>
        <h3>{vc.name} Portfolio</h3>
        <Collapse isOpen={this.state.collapse}>
          <div className='well'>
            <AddPortfolioCompany
              id={vc.id}
              collapse={this.clickToCollapse}/>
          </div>
        </Collapse>
        <TableView
         data={portfolio}
         height={600}
         onRowClick={() => {return null}}
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
