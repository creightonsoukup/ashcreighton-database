import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'

class NewStartupFrom extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = ({
      name : '',
      city: '',
      state: '',
      country:'',
      domain: '',
      profile_image: '',
      linkedin: '',
      facebook: '',
      twitter: '',
      description: '',
      website: '',
      vcId : this.props.vcId
    })

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }


  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state.vcId, {
      name : this.state.name,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      domain: this.state.website.replace(/^(?:https?:\/\/)?(?:www\.)?/i, ""),
      profile_image: this.state.profile_image,
      linkedin: this.state.linkedin,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      description: this.state.description,
      website: this.state.website
    })

    this.setState({
      name : '',
      city: '',
      state: '',
      country: '',
      domain: '',
      profile_image: '',
      linkedin: '',
      facebook: '',
      twitter: '',
      description: '',
      website: ''
    })

  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
          name='name'
          type='text'
          value={this.state.name}
          onChange={this.handleInputChange}
          state="success" />
          <FormFeedback></FormFeedback>
          <FormText color="muted"></FormText>
        </FormGroup>
        <FormGroup>
          <Label>City</Label>
          <Input
          name='city'
          type='text'
          value={this.state.city}
          onChange={this.handleInputChange}
          state="success" />          <FormFeedback></FormFeedback>
          <FormText color="muted"></FormText>
        </FormGroup>
        <FormGroup>
          <Label>State</Label>
          <Input
          name='state'
          type='text'
          value={this.state.state}
          onChange={this.handleInputChange}
          state="success" />          <FormFeedback></FormFeedback>
          <FormText color="muted"></FormText>
        </FormGroup>
        <FormGroup>
          <Label>Country</Label>
          <Input
          name='country'
          type='text'
          value={this.state.country}
          onChange={this.handleInputChange}
          state="success" />          <FormFeedback></FormFeedback>
          <FormText color="muted"></FormText>
        </FormGroup>
        <FormGroup>
          <Label>Website</Label>
          <Input
          name='website'
          type='url'
          value={this.state.website}
          onChange={this.handleInputChange}
          state="success" />
          <FormFeedback></FormFeedback>
          <FormText color="muted"></FormText>
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input
          name='description'
          type='text'
          value={this.state.description}
          onChange={this.handleInputChange}
          state="success" />          <FormFeedback></FormFeedback>
          <FormText color="muted"></FormText>
        </FormGroup>
        <FormGroup>
          <Label>LinkedIn</Label>
          <Input
          name='linkedin'
          type='url'
          value={this.state.linkedin}
          onChange={this.handleInputChange}
          state="success" />          <FormFeedback></FormFeedback>
          <FormText color="muted"></FormText>
        </FormGroup>
        <FormGroup>
          <Label>Twitter</Label>
          <Input
          name='twitter'
          type='url'
          value={this.state.twitter}
          onChange={this.handleInputChange}
          state="success" />          <FormFeedback></FormFeedback>
          <FormText color="muted"></FormText>
        </FormGroup>
        <FormGroup>
          <Label>Facebook</Label>
          <Input
          name='facebook'
          type='url'
          value={this.state.facebook}
          onChange={this.handleInputChange}
          state="success" />          <FormFeedback></FormFeedback>
          <FormText color="muted"></FormText>
        </FormGroup>
        <FormGroup>
          <Label>Profile Image Url</Label>
          <Input
          name='profile_image'
          type='text'
          value={this.state.profile_image}
          onChange={this.handleInputChange}
          state="success" />          <FormFeedback></FormFeedback>
          <FormText color="muted"></FormText>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }


}

export default NewStartupFrom
