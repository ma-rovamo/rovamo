import Image from 'next/image';
import React from 'react';

const TeamDetails = () => {
    return (
            <section className="agenko-team-details pt-130 pb-80">
                <div className="container">
                    <div className="team-details-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="agenko-image-box mb-50 pf_fadeup">
                                    <div className="agenko-image">
                                    <Image src="/murtaza.jpg" alt="img" width={410} height={414}   />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="member-info mb-50 pf_fadeup">
                                    <h2>Murtaza Akbar</h2>
                                    <span className="position">CEO & Founder</span>
                                   <p>I am Murtaza Akbar, a passionate Digital Marketing Consultant & Founder with a love for helping businesses grow online. With over 8 years of experience in digital marketing, I specialize in SEO, paid advertising, and conversion rate optimization. I take pride in delivering measurable results and ROI-focused strategies, striving to help businesses achieve sustainable growth and market leadership. Outside of work, I enjoy traveling and exploring new technologies, always seeking inspiration to fuel my creativity and strategic thinking.</p>

                                    <ul className="social-link">
                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/murt4z4/" target='_blank'><i className="bi bi-linkedin"></i></a></li>
                                        <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default TeamDetails;