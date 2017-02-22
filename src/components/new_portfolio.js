import React, { Component } from 'react';

import StartupList from '../containers/startup_list'
import SearchBar from '../containers/search_bar'

export default class NewPortfolio extends Component {

  render() {
    return (
      <div>
        <h2>New Portfolio Company</h2>
        <SearchBar />
        <StartupList />
      </div>
    )
  }
}
