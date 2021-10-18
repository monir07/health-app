import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { Col, Card, Button, } from 'react-bootstrap';
const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, description, img } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to={{
                        pathname: "/details/" + id,
                        userProps: { serviceName: name, image: img, details: description },
                    }}><Button variant="primary">Details</Button></Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;