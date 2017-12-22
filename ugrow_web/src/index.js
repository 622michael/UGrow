import React from 'react';
import ReactDOM from 'react-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);
