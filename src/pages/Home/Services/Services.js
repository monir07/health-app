import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Row } from 'react-bootstrap';
// import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="container">
            <h2 className="text-primary text-center my-5">Our services</h2>
            <Row xs={1} md={4} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;