import React from 'react';
import { Navbar, Nav, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";
import './NavigationComponent.css';

const NavigationComponent = (props) => {
    return (
        <React.Fragment>
            <Navbar dark expand='md'>
                <div className="container centered">
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/imagesCollection'> Images collection</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/formValidation'> Form validation</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
            <nav className="navbar navbar-expand-md dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/foldableTree">Link 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cards">Link 2</a>
                    </li>
                </ul>

            </nav>
        </React.Fragment>
    );
};

export default NavigationComponent;

