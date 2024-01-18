// Footer.js
// Component adds a footer to the application

import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: '#f8f9fa', marginTop: '1rem', padding: '1rem' }}>
      <p style={{ textAlign: 'center' }}>© {new Date().getFullYear()} Car Inventory</p>
    </Container>
  );
};

export default Footer;

