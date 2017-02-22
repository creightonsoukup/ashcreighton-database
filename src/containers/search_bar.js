import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCompanies } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { url: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ url: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchCompanies(this.state.url)
    this.setState({url: ''})
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit} className="input-group">
      <input
        placeholder="Enter a url (ex: convergevp.com)"
        className="form-control"
        value={this.state.url}
        onChange={this.onInputChange} />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
    </form>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCompanies }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
