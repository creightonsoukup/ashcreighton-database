import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Input, Form, FormGroup, FormText, Button } from 'reactstrap'


export default class GeneralSearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {term: ''}
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div className="searchbar">
        <Row>
            {this.props.showButton === true &&
              <Button className='butt'
                onClick={this.props.onClick}>
                {this.props.button}
              </Button>
            }
        </Row>
      </div>
    )
  }
}

// <Form sm='3'>
//   <FormGroup>
//     <Input
//       name="search"
//       placeholder={this.props.placeholder}
//       value={this.state.term}
//       onChange={event => this.onInputChange(event.target.value)} />
//   </FormGroup>
// </Form>
