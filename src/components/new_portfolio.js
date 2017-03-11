import React, { Component } from 'react';

import StartupList from '../containers/startup_list'
import SearchBar from '../containers/search_bar'
import Navbar from './navbar'

export default class NewPortfolio extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <h4>Search API For Startup</h4>
        <SearchBar />
        <StartupList id={this.props.params.id}/>
      </div>
    )
  }
}
