import React from 'react';
import HomePage from './componets/home';
import SignupPage from './componets/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './css/sideSignUp.css'

function App() {
  return (
 <div className="App">
   {/* <Navbar
      style={{
        backgroundColor: '#000000', // Background color
        color: '#ffffff',           // Text color
        zIndex: 1
      }}
    >
      <Navbar.Brand href="#home">MyWebsite</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{ color: '#ffffff' }}>Home</Nav.Link>
          <Nav.Link href="#signup" style={{ color: '#ffffff' }}>Sign Up</Nav.Link>
          <Nav.Link href="#contact" style={{ color: '#ffffff' }}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}
      <div className="container-fluid"> {/* Adjust marginTop to account for Navbar height */}
        <div className="row vh-10">
          {/* HomePage will take 75% of the width */}
          <div>
            <HomePage />
          </div>
          {/* Adjust SignupPage to fill the left portion */}
          <div className="col-md-5" style={{ marginLeft: '-2150px',  zIndex: 1  }}>
            <SignupPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;