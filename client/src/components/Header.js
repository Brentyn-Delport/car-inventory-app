// Header.js
// Component is used for the application's navigation

import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Car Inventory</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

