import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="mainfooter" role="contentinfo">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                {/* // Column1 */}
                                <div className="footer-pad">
                                    <h4>Popular Category</h4>
                                    <ul className="list-unstyled">
                                        <li>Payment Center</li>
                                        <li>Contact Directory</li>
                                        <li>Forms</li>
                                        <li>News and Updates</li>
                                        <li>FAQs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* <!--Column1--> */}
                                <div className="footer-pad">
                                    <h4>Help Support</h4>
                                    <ul className="list-unstyled">
                                        <li>Website Tutorial</li>
                                        <li>Accessibility</li>
                                        <li>Disclaimer</li>
                                        <li>Privacy Policy</li>
                                        <li>FAQs</li>
                                        <li>Webmaster</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* <!--Column1--> */}
                                <div className="footer-pad">
                                    <h4>Useful Links</h4>
                                    <ul className="list-unstyled">
                                        <li>Parks and Recreation</li>
                                        <li>Public Works</li>
                                        <li>Police Department</li>
                                        <li>Fire</li>
                                        <li>Mayor and City Council</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h4>Follow Us</h4>
                                <ul className="social-network social-circle">
                                    <li><i className="fa fa-facebook"></i></li>
                                    <li><i className="fa fa-linkedin"></i></li>
                                    <li><i className="fa fa-youtube-play"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 copy">
                                <p className="text-center">&copy; Copyright 2021 Health Care Site  All rights reserved.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;