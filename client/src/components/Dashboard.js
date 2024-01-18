// Dahsboard.js

import React, { useContext } from 'react';
import { CarContext } from '../context/CarContext'; // Adjust the import path as needed
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  const { cars } = useContext(CarContext);

  return (
    <Container fluid>
      <h2 className="mt-3">Dashboard</h2>
      {/* Use Row and Col for responsive layout */}
      <Row>
        <Col>
          {/* Sample card to display car data - can be replaced with actual components later */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Car Inventory</Card.Title>
              <Card.Text>
                {/* Display car data as a list - replace with dynamic content later */}
                {cars.length > 0 ? (
                  cars.map(car => <div key={car.id}>{car.model}</div>)
                ) : (
                  <p>No cars available.</p>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Additional Rows and Columns for more components */}
    </Container>
  );
};

export default Dashboard;
