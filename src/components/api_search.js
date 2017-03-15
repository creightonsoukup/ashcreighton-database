import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { fetchCompanies } from '../actions/index'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


export default class APISearch extends Component {
  static contextTypes = {
    router: PropTypes.object

  }
  constructor(props) {
    super(props);

    this.state = {term: ''}
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <Form onSubmit={event => event.preventDefault()}>
        <FormGroup >
          <Input
            name="search"
            placeholder="Enter full company name"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
            <FormText color="muted">{}</FormText>

        </FormGroup>
      </Form>
    )
  }

}
