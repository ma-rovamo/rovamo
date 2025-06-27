import Link from 'next/link';
import React from 'react';

const Services2 = () => {
    return (
                <section className="agk-services gray-dark pt-130 pb-100">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    
                                    <div className="section-title mb-65 pf_fadeup">
                                        <span className="sub-title">Our Expertise</span>
                                          <h2>Building Tomorrow Digital Experiences Today</h2>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="text-box mb-60 pf_fadeup">
                                        <p>From AI strategy to full-stack development, we deliver comprehensive solutions that scale your business</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    
                                    <div className="agenko-card-item style-one mb-30 pf_fadeup">
                                        <div className="card-title">
                                            <div className="sn-number">01</div>
                                            <h3 className="title">AI Consulting</h3>
                                        </div>
                                        <div className="content">
                                            <p> Strategic AI implementation roadmaps, use case identification, automation workflows, and ROI analysis. Get intelligent solutions that transform operations and drive measurable results.</p>
                                        </div>
                                        <div className="card-button">
                                            <Link href="/service/service-details" className="theme-btn style-one">
                                                <span className="text-flip">
                                                    <span className="text">LEARN MORE</span>
                                                    <span className="text">LEARN MORE</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                   
                                    <div className="agenko-card-item style-one mb-30 pf_fadeup">
                                        <div className="card-title">
                                            <div className="sn-number">02</div>
                                            <h3 className="title">MVP Development</h3>
                                        </div>
                                        <div className="content">
                                            <p>Rapid prototyping, market validation, user testing, and scalable architecture. Transform ideas into functional products that validate concepts and attract investors.</p>
                                        </div>
                                        <div className="card-button">
                                            <Link href="/service/mvp-development-services" className="theme-btn style-one">
                                                <span className="text-flip">
                                                    <span className="text">LEARN MORE</span>
                                                    <span className="text">LEARN MORE</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                   
                                    <div className="agenko-card-item style-one mb-30 pf_fadeup">
                                        <div className="card-title">
                                            <div className="sn-number">03</div>
                                            <h3 className="title">Product Design</h3>
                                        </div>
                                        <div className="content">
                                            <p>User research, wireframing, visual design, Figma prototypes, and conversion optimization. Create interfaces that users love and businesses benefit from.</p>
                                        </div>
                                        <div className="card-button">
                                            <Link href="/service/product-design" className="theme-btn style-one">
                                                <span className="text-flip">
                                                    <span className="text">LEARN MORE</span>
                                                    <span className="text">LEARN MORE</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                  <div className="col-lg-12">
                                   
                                    <div className="agenko-card-item style-one mb-30 pf_fadeup">
                                        <div className="card-title">
                                            <div className="sn-number">04</div>
                                            <h3 className="title">Web Development</h3>
                                        </div>
                                        <div className="content">
                                            <p> NextJS applications, React development, performance optimization, and responsive design. Build fast, scalable websites that convert visitors into customers.</p>
                                        </div>
                                        <div className="card-button">
                                            <Link href="/service/web-development" className="theme-btn style-one">
                                                <span className="text-flip">
                                                    <span className="text">LEARN MORE</span>
                                                    <span className="text">LEARN MORE</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                  <div className="col-lg-12">
                                   
                                    <div className="agenko-card-item style-one mb-30 pf_fadeup">
                                        <div className="card-title">
                                            <div className="sn-number">05</div>
                                            <h3 className="title">No-Code Development</h3>
                                        </div>
                                        <div className="content">
                                            <p> Bubble applications, Webflow sites, automation workflows, and rapid deployment. Launch sophisticated solutions without traditional coding timelines.</p>
                                        </div>
                                        <div className="card-button">
                                            <Link href="/service/no-code-development" className="theme-btn style-one">
                                                <span className="text-flip">
                                                    <span className="text">LEARN MORE</span>
                                                    <span className="text">LEARN MORE</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                 <div className="col-lg-12">
                                   
                                    <div className="agenko-card-item style-one mb-30 pf_fadeup">
                                        <div className="card-title">
                                            <div className="sn-number">06</div>
                                            <h3 className="title">Requirements Consulting</h3>
                                        </div>
                                        <div className="content">
                                            <p> Business analysis, scope definition, project planning, and strategic roadmaps. Align technical capabilities with business objectives for successful outcomes.</p>
                                        </div>
                                        <div className="card-button">
                                            <Link href="/service/requirements-consulting" className="theme-btn style-one">
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
                    </section>
    );
};

export default Services2;