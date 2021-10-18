import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="home">
            <Banner></Banner>
            <div className="container">
                <h2 className="text-dark display-2 text-center my-5">Our services</h2>
                <Row xs={1} md={4} className="g-4">
                    {
                        services.map((service, index) => (
                            index > 7
                                ? <Service key={service.id} service={service}></Service>
                                : null
                        ))
                    }
                </Row>
            </div>
            {/* <Services></Services> */}
        </div>
    );
};

export default Home;