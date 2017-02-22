import React, { Component } from 'react';

import StartupList from '../containers/startup_list'
import SearchBar from '../containers/search_bar'

export default class NewPortfolio extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <StartupList />
      </div>
    )
  }
}
