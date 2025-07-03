import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroBanner2 = () => {
    return (
        <section className="agk-hero">
        <div className="hero-wrapper-two">
            <div className="shape shape-one"><span><Image className="rotate360" src="/assets/images/digital-agency/hero/shape/shape1.png" alt="img" width={50} height={50}   /></span></div>
            <div className="shape shape-two"><span><Image className="animate-float-bob-y" src="/assets/images/digital-agency/hero/shape/shape2.png" alt="img" width={40} height={80}   /></span></div>
            <div className="shape circle-one"><span></span></div>
            <div className="shape circle-two"><span></span></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <h1>
                                <span className="text-anm">AI-Powered Business  </span>
                                <span className="text-anm">Growth</span>
                            </h1>
                            {/* <div className="pro">Pro</div> */}
                            <div className="text-box pf_fadeup ">
                                <p>Delivering intelligent automation, rapid prototyping, strategic AI consulting, and scalable development solutions that accelerate your.</p>
                                <div className="hero-button">
                                    <Link href="/about" className="theme-btn style-one">
                                        <span className="text-flip">
                                            <span className="text">LEARN MORE</span>
                                            <span className="text">LEARN MORE</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <ul className="service-list pf_fadeup">
                            <li>
                                
                                <Link href="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-browser-edge"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">AI Consulting</h4>
                                        <p> 7-day strategy delivery</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/service/mvp-development-services" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-code-square"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">MVP Development</h4>
                                        <p>48-hour rapid launch</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/service/product-design" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-lightbulb"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Product Design</h4>
                                        <p>Conversion-focused interfaces</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                                <Link href="/service/no-code-development" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-megaphone"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">No-Code Development</h4>
                                        <p>Fast scalable solutions</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        
                        <div className="hero-image style-one pf_fadeup">
                            <img src="https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.jpg?b=1&s=612x612&w=0&k=20&c=I8aXnwy7BCFAJ3Iw4bzRnRLtiIa-OPgLakMcVl9g9co=" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanner2;