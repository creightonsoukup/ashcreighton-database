import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchStartups, addInvestment, fetchCompanies, addPortfolio, fetchPortfolio } from '../actions/index';
import Navbar from '../components/navbar';
import TableView from '../components/table_view';
import GeneralSearchBar from '../containers/general_searchbar';
import APISearch from '../components/api_search';
import { TabContent, TabPane, Button, Row, Col, Nav, NavItem, NavLink,  } from 'reactstrap';
import classnames from 'classnames';
import NewStartupForm from './new_startup_form'


class ConnectPortfolio extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      selectedStartup: null,
      vcId : this.props.id,
      term: '',
      activeTab: '1'

    }
    this.addPortfolio = this.addPortfolio.bind(this);
    this.onRowClick = this.onRowClick.bind(this)
    this.apiSearch = this.apiSearch.bind(this)
    this.toggle = this.toggle.bind(this)
    this.postSuccess = this.postSuccess.bind(this)


  }

  componentWillMount(props) {
    this.props.fetchStartups()
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.companies[0]) {
      const companies = nextProps.companies[0].data.items
      const filteredCompanies = []
      const closestMatch = []
      companies.map((company) => {
        if(company.properties.name.toLowerCase() === (this.state.term).toLowerCase()) {
          filteredCompanies.push({
            id: company.uuid,
            name: company.properties.name,
            city: company.properties.city_name,
            state: company.properties.region_name,
            domain: company.properties.domain,
            description: company.properties.short_description,
            profile_image: company.properties.profile_image_url,
            facebook: company.properties.facebook_url,
            twitter: company.properties.twitter_url,
            linkedin: company.properties.linkedin_url,
            website: company.properties.homepage_url,
            country: company.properties.country_code
          })
          this.setState({companies: filteredCompanies})
        }
      })
    }


    // console.log(this.state.companies)
  }

  addPortfolio(id, row) {
    this.props.addPortfolio(id, row)
      .then((data) => {
        data.payload.status == 200 ? this.postSuccess(data) :
        alert('Database Error')
      })
  }

  postSuccess(data) {
    this.props.fetchPortfolio(this.state.vcId)
    this.setState({term: ''})
    if(this.state.activeTab === '2') {
      this.props.collapse()
    }
  }

  onRowClick(rowIdx, row) {
    this.addPortfolio(this.props.id, row)
    this.setState({companies: []})
  }

  apiSearch(term) {
    this.props.fetchCompanies(term)
    this.setState({term: term})
  }

  toggle(tab) {
   if (this.state.activeTab !== tab) {
     this.setState({
       activeTab: tab
     });
   }
  }


  render() {
    //
    // if (this.state.startups.length < 1 ) {
    //   return <div>loading</div>
    // }
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
      key: 'domain',
      name: 'Domain',
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
      key: 'profile_image',
      name: 'Profile Image',
      resizable: true,
      editable: true,
      width: 200
    },{
      key: 'facbeook',
      name: 'Facebook',
      resizable: true,
      editable: true,
      width: 200
    },{
      key: 'twitter',
      name: 'Twitter',
      resizable: true,
      editable: true,
      width: 200
    },{
      key: 'linkedin',
      name: 'LinkedIn',
      resizable: true,
      editable: true,
      width: 200
    },{
      key: 'country',
      name: 'Country',
      resizable: true,
      editable: true,
      width: 200
    }]

    return (
        <div className="connect_portfolio">
          <Nav tabs>
            <NavItem>
              <NavLink
              className={classnames({active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1')}}>
                Add By API Search
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
              className={classnames({active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2')}}>
                Add Manually
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId='1'>
              <Row>
                <Col>
                <APISearch
                term={this.state.term}
                onSearchTermChange={this.apiSearch} />
                <TableView
                  columns={columns}
                  data={this.state.companies}
                  onRowClick={this.onRowClick}
                  select={false}
                  height={200}
                  getRowSelection={this.addPortfolioCompany} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId='2'>
              <Row>
                <Col>
                  <NewStartupForm
                  onSubmit={this.addPortfolio}
                  vcId={this.state.vcId} />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      )

  }
}

function mapStateToProps({allStartups, addInvestment, companies}) {
  return {allStartups, addInvestment, companies }
}

export default connect(mapStateToProps, { fetchStartups, addInvestment, fetchPortfolio, fetchCompanies, addPortfolio })(ConnectPortfolio)
