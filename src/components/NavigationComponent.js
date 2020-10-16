import React from 'react';
import './NavigationComponent.css';

const NavigationComponent = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <ul className="navbar-nav container centered">
                    <li className="nav-item">
                        <a className="nav-link" href="/tasks">Cards</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/foldableTree">Foldable tree</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/spyral">Spyral</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default NavigationComponent;