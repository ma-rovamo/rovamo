import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
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
					<div className="col-lg-6 col-md-6 col-sm-12">
						<div className="agenko-pricing-item style-three mb-40 pf_fadeup h-100 d-flex flex-column">
							<div className="shape">
								<span></span>
							</div>
							<div className="pricing-head">
								<h2 className="price">
									<span className="currency">One off</span>
								</h2>
								<span className="plan">Ideal for startups and small projects</span>
									
								<div className="cta-button d-flex justify-content-center text-center  mt-4 py-3 pf_fadeup">
									<Link
										href={"https://cal.com/murtaza-akbar/discovery"}
										target="_blank">
										<Button
											className="d-flex align-items-center gap-3 px-4 py-3  theme-btn style-one  shadow-sm border-0 "
											style={{
												transition: "all 0.3s ease",
												backgroundColor: "var(--primary-color)",
												color: "var(--primary-black-color)",
												fontFamily: "var(--body-font)",
												fontWeight: "600",
											}}>
											<div
												className="position-relative"
												style={{
													boxShadow: "0 0 0 2px rgba(156, 254, 79, 0.3)",
												}}>
												{/* <Image
													src="/murtaza.jpg"
													alt="Murtaza"
													width={40}
													height={40}
													className="rounded-circle border"
													style={{ borderColor: "var(--primary-color)" }}
												/> */}
											</div>
											<span className="text-flip">
												<span className="text fw-medium fs-5">
													Secure your July spot
												</span>
												<span className="text fw-medium fs-5">
													Secure your July spot
												</span>
											</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-arrow-right"
												viewBox="0 0 16 16">
												<path
													fillRule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</Button>
									</Link>
								</div>
							</div>
							<div className="pricing-body flex-grow-1">
								<ul className="check-list style-one">
									<li>
										<i className="bi bi-check2-square"></i> Core requirements discovery

									</li>
									<li>
										<i className="bi bi-check2-square"></i>Standard documentation package
									</li>
									<li>
										<i className="bi bi-check2-square"></i> Basic stakeholder interviews

									</li>
									<li>
										<i className="bi bi-check2-square"></i>Email support

									</li>
									<li>
										<i className="bi bi-check2-square"></i>15-day post-delivery support
									</li>
								
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-6 col-sm-12 ">
						<div className="agenko-pricing-item pricing-border style-three mb-40 pf_fadeup h-100 d-flex flex-column">
							<div className="shape">
								<span></span>
							</div>
							<div className="pricing-head">
								<h2 className="price">
									<span className="currency">Retainer</span>
								</h2>
								<span className="plan">Most popular</span><br />
									<span className="currency">Perfect for growing businesses</span>
								<div className="cta-button d-flex justify-content-center text-center  mt-4 py-3 pf_fadeup">
									<Link
										href={"https://cal.com/murtaza-akbar/discovery"}
										target="_blank">
										<Button
											className="d-flex align-items-center gap-3 px-4 py-3  theme-btn style-one  shadow-sm border-0 "
											style={{
												transition: "all 0.3s ease",
												backgroundColor: "var(--primary-color)",
												color: "var(--primary-black-color)",
												fontFamily: "var(--body-font)",
												fontWeight: "600",
											}}>
											<div
												className="position-relative"
												style={{
													boxShadow: "0 0 0 2px rgba(156, 254, 79, 0.3)",
												}}>
												{/* <Image
													src="/murtaza.jpg"
													alt="Murtaza"
													width={40}
													height={40}
													className="rounded-circle border"
													style={{ borderColor: "var(--primary-color)" }}
												/> */}
											</div>
											<span className="text-flip">
												<span className="text fw-medium fs-5">
													Secure your July spot
												</span>
												<span className="text fw-medium fs-5">
													Secure your July spot
												</span>
											</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-arrow-right"
												viewBox="0 0 16 16">
												<path
													fillRule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</Button>
									</Link>
								</div>
							</div>
							<div className="pricing-body flex-grow-1">
								<ul className="check-list style-one">
									<li>
										<i className="bi bi-check2-square"></i> Enhanced requirements analysis

									</li>
									<li>
										<i className="bi bi-check2-square"></i>Comprehensive documentation suite
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Priority stakeholder workshops
									</li>
									<li>
										<i className="bi bi-check2-square"></i>Phone + email support
									</li>
									<li>
										<i className="bi bi-check2-square"></i>30-day post-delivery support
									</li>
									<li>
										<i className="bi bi-check2-square"></i>1 revision round included
									</li>
									
								</ul>
							</div>
						</div>
					</div>

					{/* <div className="col-lg-4 col-md-6 col-sm-12">
						<div className="agenko-pricing-item style-three mb-40 pf_fadeup h-100 d-flex flex-column">
							<div className="shape">
								<span></span>
							</div>
							<div className="pricing-head">
								<span className="plan">Premium</span>
								<h2 className="price">
									<span className="currency">$</span>7,500 USD
								</h2>
								<p>Essential features at an affordable price for getting started.</p>
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
					</div> */}
					{/* 
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
								<p>Essential features at an affordable price for getting started.</p>
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
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Pricing1;
