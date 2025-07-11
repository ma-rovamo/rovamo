import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About1 = () => {
    return (
        <section className="agk-about pt-130 pb-80">
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    
                    <div className="agk-content-box style-one mb-50 pf_fadeup">
                        <div className="section-title mb-20">
                            <span className="sub-title">About us</span>
                            <h2>Fast digital transformation with proven expertise!</h2>
                        </div>
                        <p>We specialize in delivering strategic solutions that elevate your business through innovative development approaches. By combining rapid delivery methods, proven expertise, and creative problem-solving, we help companies achieve their digital transformation goals.</p>
                    <p>Our dedicated team works closely with clients to understand unique challenges, crafting customized solutions that drive measurable results.</p>
                    <div className="agk-button mb-30">
                        <Link href="/about" className="theme-btn style-one">
                            <span className="text-flip">
                                <span className="text">LEARN MORE</span>
                                <span className="text">LEARN MORE</span>
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            
                            <div className="agenko-counter-box style-one">
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">15</span>+</h2>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            
                            <div className="agenko-counter-box style-one">
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">150</span>+</h2>
                                    <p>Successful Projects Delivered</p>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                    </div>
                </div>
                <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup">
                        <div className="agk-image">
                        <Image src="/assets/images/digital-agency/about/about1.jpg" alt="img" width={440} height={532}   />
                        </div>
                        <div className="agenko-experince-box style-one">
                            <h2><span>15</span>+</h2>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;