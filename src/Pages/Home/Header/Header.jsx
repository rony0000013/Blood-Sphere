import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/BLOODSPHERE-01.jpeg';
import Login from '../../Login/Login';
import Logout from '../../Login/Logout';
import './Header.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {

    const { user, logout } = useAuth0();

    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="/home"><img className="image" src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                            <AnchorLink href="#about" className='list-item text-decoration-none'>About</AnchorLink>
                            <AnchorLink href="#features" className='list-item text-decoration-none'>Features</AnchorLink>
                            <AnchorLink href="#contact" className='list-item text-decoration-none'>Contact</AnchorLink>
                            {user
                            ?
                            <Logout />
                            :
                            <Login />
                            }
                            {user &&
                                <Navbar.Text><FontAwesomeIcon icon={faUser} /><span className="userName">{user.displayName}</span></Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;