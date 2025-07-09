import Image from 'next/image';
import React from 'react';

const ServiceDetails = () => {
    return (
        <section className="agenko-service-details pt-130 pb-80">
        <div className="container">
            
            <div className="service-details-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="agenko-iamge-box mb-70 pf_zoomIn">
                            <div className="agenko-image">
                            <Image src="/images/services/ai-consulting.jpg" alt="img" width={1290} height={600}   />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        
                        <div className="agenko-content-box mb-50 pf_fadeup">
                            <div className="section-title mb-40">
                                <span className="sub-title">Description</span>
                                <h2>AI Consulting Success Metrics</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="agenko-counter-item">
                                        <div className="content">
                                            <h2><span className="count">7</span></h2>
                                            <p>Days Average Strategy Delivery</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="agenko-counter-item">
                                        <div className="content">
                                            <h2><span className="count">95</span>%</h2>
                                            <p>Implementation Success Rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="agenko-content-box mb-50 pf_fadeup">
                            <p className="mb-20">Transform your business operations with intelligent automation that delivers measurable results. Our AI consulting services have helped Fortune 500 companies reduce operational costs by 40% while increasing efficiency through strategic implementation of artificial intelligence solutions.</p>
                            <p className="mb-20">We offer a range of specialized AI consulting services designed to address your unique business challenges. Through innovative strategies and tailored solutions, our expertise ensures exceptional outcomes that drive competitive advantage and sustainable growth.</p>
                            {/* <ul className="check-list style-one">
                                <li><i className="flaticon-check"></i>Passionate Problem-Solvers For Your</li>
                                <li><i className="flaticon-check"></i>Business & Financial Creative Innovators</li>
                                <li><i className="flaticon-check"></i>Provide National Trusted Client-Centered</li>
                                <li><i className="flaticon-check"></i>Perfect & Modern Work Results-Driven</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServiceDetails;