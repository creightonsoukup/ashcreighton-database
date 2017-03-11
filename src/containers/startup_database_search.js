import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStartups } from '../actions/index';

class StartupDatabaseSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { url: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount(props) {
      this.props.fetchStartups();
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
        placeholder="Search for a startup"
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

function mapStateToProps({ allStartups }) {
 return { allStartups }
}

export default connect(mapStateToProps, { fetchStartups })(StartupDatabaseSearch)
