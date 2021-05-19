import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class NavbarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navbarShadow: 'mt-3',
        }
    }


    componentDidMount() {
        // Onscroll 
        window.addEventListener('scroll', () => {
            let navbarShadow = 'bg-white shadow';
            if (window.scrollY === 0) {
                navbarShadow = 'mt-3';
            }
            this.setState({ navbarShadow });
        });
    }

    render() {
        return (

            <Navbar collapseOnSelect expand="lg" className={`${this.state.navbarShadow}`} fixed="top" variant="light">
                <div className="container">
                    <Navbar.Brand href="#home">
                        <img src="assets/vector-logo.svg" height="35px" alt="navbar" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="me-5 link-navbar active bg-active" href="#product">Home</Nav.Link>
                            <Nav.Link className="me-5 link-navbar" href="#services">Services</Nav.Link>
                            <Nav.Link className="me-5 link-navbar" href="#about">About Us</Nav.Link>
                            <Nav.Link className="me-5 link-navbar" href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <li className="nav-item p-3 d-flex">
                                <a href="#myproject" className="nav-link text-center btn-custom width-125 rounded-pill shadow" id="btn-sign">My Project</a>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </div>

            </Navbar>
        )
    }
}
