import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'



export default class Navigation extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar color='faded' light toggleable>
        <NavbarToggler onClick={this.toggle} />
        <NavbarBrand href='/'>Database</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/vc'>VCs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/startups'>Startups</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=''>Users</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }

}
