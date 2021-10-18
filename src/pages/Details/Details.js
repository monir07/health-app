import React from 'react';
//import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom'

const Details = (props) => {
    //const { detailId } = useParams();
    let location = useLocation();
    console.log(location.userProps);
    const { serviceName, image, details } = location.userProps;


    return (
        <div className="container">
            <div className="col-md-12 mt-5">
                <section className="row">
                    <div className="col-md-6">
                        <div className="pro-img-details">
                            <img className="img-fluid" src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <span className="display-6 text-uppercase"> {serviceName}</span>
                        <p>{details}</p>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Details;