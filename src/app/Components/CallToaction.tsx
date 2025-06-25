"use client"
import React from 'react';
import Link from 'next/link';
import BookACallModal from './buttons/BookaCall';

const CallToAction = () => {
    return (
        <section className="cta-section py-5 primary-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-12 ">
                        <div className="cta-content text-white pf_fadeup">
                            <h2 className="mb-3">Ready to Transform Your Ideas into Intelligent Solutions?</h2>
                            <p className="mb-0 fs-5">From 48-hour MVPs to complete AI-powered products, we deliver what  traditional agencies build in months.</p>
                          <div className="cta-button d-flex justify-content-center text-center mt-md-0 mt-4 py-4 pf_fadeup">
                           <BookACallModal buttonText='Book a Call with Murtaza' showImage={true}/>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
