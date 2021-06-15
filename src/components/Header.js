import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
class Header extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <h2 className="col-3 text-left">Home</h2>
                    <h3 className="col-6 text-center">Profile</h3>
                    <h2 className="col-3 text-right">News</h2>
                </div>
            </>
        );
    }
}

export default Header;