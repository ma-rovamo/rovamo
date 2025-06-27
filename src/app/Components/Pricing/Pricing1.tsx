import Link from "next/link";
import React from "react";

const Pricing1 = () => {
	return (
		<section className="agenko-pricing pt-130">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="agenko-pricing-item style-one mb-20 pf_fadeup">
							
							<div className="pricing-head">
								<span className="sub-title">Business</span>
								<h2>Invest in Your Success</h2>
								<p>
									Unlock your potential with affordable, tailored plans designed
									to fuel growth, enhance performance, and drive long-term
									success.
								</p>
							</div>
							<div className="pricing-body">
								<ul className="check-list style-one">
									<li>
										<i className="bi bi-check-circle-fill"></i>Unlimited Cards
									</li>
									<li>
										<i className="bi bi-check-circle-fill"></i>Automated
										management
									</li>
									<li>
										<i className="bi bi-check-circle-fill"></i>SOX compliance
									</li>
									<li>
										<i className="bi bi-check-circle-fill"></i>Enterprise ERP
										integrations
									</li>
									<li>
										<i className="bi bi-check-circle-fill"></i>Local video
										issuance
									</li>
								</ul>
							</div>
							<div className="pricing-footer">
								<div className="agk-button">
									<Link href="/contact" className="theme-btn style-two">
										<span className="text">Contact Us</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="agenko-pricing-item style-two mb-20 pf_fadeup">
							<div className="pricing-head">
								<h4>Basic</h4>
								<div className="pricing">
									<span className="sign">$</span>2,500 USD
								</div>
							</div>
							<div className="pricing-body">
								<ul className="check-list style-one">
									<li><i className="bi bi-check-circle-fill"></i>Ideal for startups and small projects</li>
									<li><i className="bi bi-check-circle-fill"></i>Core service delivery</li>
									<li><i className="bi bi-check-circle-fill"></i>Standard timeline</li>
									<li><i className="bi bi-check-circle-fill"></i>Basic documentation</li>
									<li><i className="bi bi-check-circle-fill"></i>Email support</li>
									<li><i className="bi bi-check-circle-fill"></i>15-day post-delivery support</li>
								</ul>
							</div>
						</div>

						<div className="agenko-pricing-item style-two mb-20 pf_fadeup">
							<div className="pricing-head">
								<h4>Standard</h4>
								<div className="pricing">
									<span className="sign">$</span>4,500 USD
								</div>
							</div>
							<div className="pricing-body">
								<ul className="check-list style-one">
									<li><i className="bi bi-check-circle-fill"></i>Perfect for growing businesses</li>
									<li><i className="bi bi-check-circle-fill"></i>Enhanced service delivery</li>
									<li><i className="bi bi-check-circle-fill"></i>Priority timeline</li>
									<li><i className="bi bi-check-circle-fill"></i>Comprehensive documentation</li>
									<li><i className="bi bi-check-circle-fill"></i>Phone + email support</li>
									<li><i className="bi bi-check-circle-fill"></i>30-day post-delivery support</li>
									<li><i className="bi bi-check-circle-fill"></i>1 revision round included</li>
								</ul>
							</div>
						</div>

						<div className="agenko-pricing-item style-two mb-20 pf_fadeup">
							<div className="pricing-head">
								<h4>Premium</h4>
								<div className="pricing">
									<span className="sign">$</span>7,500 USD
								</div>
							</div>
							<div className="pricing-body">
								<ul className="check-list style-one">
									<li><i className="bi bi-check-circle-fill"></i>Designed for enterprise clients</li>
									<li><i className="bi bi-check-circle-fill"></i>Complete service delivery</li>
									<li><i className="bi bi-check-circle-fill"></i>Express timeline</li>
									<li><i className="bi bi-check-circle-fill"></i>Full documentation package</li>
									<li><i className="bi bi-check-circle-fill"></i>Dedicated project manager</li>
									<li><i className="bi bi-check-circle-fill"></i>60-day post-delivery support</li>
									<li><i className="bi bi-check-circle-fill"></i>Unlimited revisions</li>
									<li><i className="bi bi-check-circle-fill"></i>Weekly progress meetings</li>
								</ul>
							</div>
						</div>
                        <div className="agenko-pricing-item style-two mb-20 pf_fadeup">
							<div className="pricing-head">
								<h4>Hourly Consulting </h4>
								<div className="pricing">
									<span className="sign">$</span>50 USD/hour
								</div>
							</div>
							<div className="pricing-body">
								<ul className="check-list style-one">
									<li><i className="bi bi-check-circle-fill"></i>For ongoing support and maintenance</li>
									<li><i className="bi bi-check-circle-fill"></i>Flexible engagement model</li>
									<li><i className="bi bi-check-circle-fill"></i>Billed weekly</li>
									<li><i className="bi bi-check-circle-fill"></i>Minimum 5-hour blocks</li>
									<li><i className="bi bi-check-circle-fill"></i>Perfect for ongoing optimization</li>
									
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing1;
