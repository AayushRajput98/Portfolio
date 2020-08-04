import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Row, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <Navbar dark expand='md' sticky='top'>
                <NavbarToggler onClick={this.toggleNav} style={{ margin: 20, position: "absolute", right: 0, top: 0 }} />
                <NavbarBrand className="mr-auto" style={{ marginLeft: 20 }} href="/"><Row><h3 style={{ color: "orange" }}>Port</h3><h3>Folio</h3></Row></NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar style={{ margin: 20, textAlign: "center", marginLeft: 'auto', marginRight: 'auto' }}>
                        <NavItem className="menu"> <a className='link' href="#home"> Home </a></NavItem>
                        <NavItem className="menu"> <a className='link' href="#about"> About </a></NavItem>
                        <NavItem className="menu"> <a className='link' href="#education"> Education </a></NavItem>
                        <NavItem className="menu"> <a className='link' href="#about"> Skill </a></NavItem>
                        <NavItem className="menu"> <a className='link' href="#about"> Projects </a></NavItem>
                        <NavItem className="menu"> <a className='link' href="#about"> Hobby </a></NavItem>
                        <NavItem className="menu"> <a className='link' href="#contact"> Contact </a></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );

    }
}

export default Header;