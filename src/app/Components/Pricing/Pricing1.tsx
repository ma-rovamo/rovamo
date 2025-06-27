import Link from "next/link";
import React from "react";

const Pricing1 = () => {
	return (
		<section className="agenko-pricing pt-130 pb-90">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center mb-50 pf_zoomIn">
							<span className="sub-title">Our Pricing</span>
							<h2>Value That Fits Your Budget</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="agenko-pricing-item style-three mb-40 pf_fadeup h-100 d-flex flex-column">
							<div className="shape">
								<span></span>
							</div>
							<div className="pricing-head">
								<span className="plan">Basic</span>
								<h2 className="price">
									<span className="currency">$</span>2,500 USD
								</h2>
								{/* <p>Essential features at an affordable price for getting started.</p> */}
							</div>
							<div className="pricing-body flex-grow-1">
								<ul className="check-list style-one">
									<li>
										<i className="bi bi-check2-square"></i>Ideal for startups
										and small projects
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Core service delivery
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Standard timeline
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Basic documentation
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Email support
									</li>
									<li>
										<i className="bi bi-check2-square"></i>15-day post-delivery
										support
									</li>
								</ul>
							</div>
							<div className="pricing-footer mt-auto">
								<button className="theme-btn style-two">Buy Now</button>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="agenko-pricing-item style-three mb-40 pf_fadeup h-100 d-flex flex-column">
							<div className="shape">
								<span></span>
							</div>
							<div className="pricing-head">
								<span className="plan">Standard</span>
								<h2 className="price">
									<span className="currency">$</span>4,500 USD
								</h2>
								{/* <p>Essential features at an affordable price for getting started.</p> */}
							</div>
							<div className="pricing-body flex-grow-1">
								<ul className="check-list style-one">
									<li>
										<i className="bi bi-check2-square"></i>Perfect for growing
										businesses
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Enhanced service
										delivery
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Comprehensive
										documentation
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Priority timeline
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Phone + email support
									</li>
									<li>
										<i className="bi bi-check2-square"></i>30-day post-delivery
										support
									</li>
									<li>
										<i className="bi bi-check2-square"></i>1 revision round
										included
									</li>
								</ul>
							</div>
							<div className="pricing-footer mt-auto">
								<button className="theme-btn style-two">Buy Now</button>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="agenko-pricing-item style-three mb-40 pf_fadeup h-100 d-flex flex-column">
							<div className="shape">
								<span></span>
							</div>
							<div className="pricing-head">
								<span className="plan">Premium</span>
								<h2 className="price">
									<span className="currency">$</span>7,500 USD
								</h2>
								{/* <p>Essential features at an affordable price for getting started.</p> */}
							</div>
							<div className="pricing-body flex-grow-1">
								<ul className="check-list style-one">
									<li>
										<i className="bi bi-check2-square"></i>Designed for
										enterprise clients
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Complete service
										delivery
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Express timeline
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Full documentation
										package
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Dedicated project
										manager
									</li>
									<li>
										<i className="bi bi-check2-square"></i>60-day post-delivery
										support
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Unlimited revisions
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Weekly progress
										meetings
									</li>
								</ul>
							</div>
							<div className="pricing-footer mt-auto">
								<button className="theme-btn style-two">Buy Now</button>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch my-5">
						<div className="agenko-pricing-item style-three mb-40 pf_fadeup h-100 d-flex flex-column ">
							<div className="shape">
								<span></span>
							</div>
							<div className="pricing-head">
								<span className="plan">Hourly Consulting</span>
								<h2 className="price">
									<span className="currency">$</span>50 USD/hour
								</h2>
								{/* <p>Essential features at an affordable price for getting started.</p> */}
							</div>
							<div className="pricing-body flex-grow-1">
								<ul className="check-list style-one">
									<li>
										<i className="bi bi-check2-square"></i>For ongoing support
										and maintenance
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Flexible engagement
										model
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Billed weekly
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Minimum 5-hour blocks
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Perfect for ongoing
										optimization
									</li>
								</ul>
							</div>
							<div className="pricing-footer mt-auto">
								<button className="theme-btn style-two">Buy Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing1;
