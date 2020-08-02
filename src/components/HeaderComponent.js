import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar dark expand='sm' sticky='top'>
                <NavbarBrand className="mr-auto" style={{ marginLeft: 20 }} href="/"><Row><h3 style={{ color: "orange" }}>Port</h3><h3>Folio</h3></Row></NavbarBrand>
                <Nav navbar className="mr-auto navbar">
                    <NavItem className="menu"> <a className='link' href="#home"> Home </a></NavItem>
                    <NavItem className="menu"> <a className='link' href="#about"> About </a></NavItem>
                    <NavItem className="menu"> <a className='link' href="#education"> Education </a></NavItem>
                    <NavItem className="menu"> <a className='link' href="#about"> Skill </a></NavItem>
                    <NavItem className="menu"> <a className='link' href="#about"> Projects </a></NavItem>
                    <NavItem className="menu"> <a className='link' href="#about"> Hobby </a></NavItem>
                    <NavItem className="menu"> <a className='link' href="#contact"> Contact </a></NavItem>
                    <NavItem className="menu"> <a className='link' href="#about"> Feedback </a></NavItem>
                </Nav>
            </Navbar>
        );

    }
}

export default Header;