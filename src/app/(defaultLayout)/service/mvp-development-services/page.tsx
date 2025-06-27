import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import Process3 from "../../../Components/Process/Process3";
import Pricing1 from "../../../Components/Pricing/Pricing1";
import Brand4 from "../../../Components/Brand/Brand4";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "../../../Components/CallToaction";
// components
const ServicesDetailsMVPDevelopment = () => {
	return (
		<section className="agenko-service-details pt-130 pb-80">
			<div className="container">
				<div className="service-details-wrapper">
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-iamge-box mb-70 pf_zoomIn">
								<div className="agenko-image">
									<Image
										src="/assets/images/pages/service/single-service1.jpg"
										alt="img"
										width={1290}
										height={500}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="agenko-content-box mb-50 pf_fadeup">
								<div className="section-title mb-40">
									<span className="sub-title">Description</span>
									<h2>MVP Development Success Metrics</h2>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="agenko-counter-item">
											<div className="content">
												<h2>
													<span className="count">200</span>+
												</h2>
												<p>MVPs Delivered</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="agenko-counter-item">
											<div className="content">
												<h2>
													<span className="count">48</span>
												</h2>
												<p>Hours Average Completion</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="agenko-content-box mb-50 pf_fadeup">
								<p className="mb-20">
									Launch your product ideas faster than ever with our 48-hour
									MVP development service. We've helped over 200 startups
									validate their concepts and secure $50M+ in total funding
									through rapid prototyping that proves market demand and
									attracts investor interest.
								</p>
								<p className="mb-20">
									We offer a range of specialized MVP development services
									designed to address your unique validation challenges. Through
									innovative rapid development strategies and tailored
									solutions, our expertise ensures exceptional outcomes that
									accelerate time-to-market.{" "}
								</p>
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

const ProcessForALL = () => {
	const processContent = [
		{
			img: "/assets/images/pages/gallery/process1.jpg",
			number: "01",
			title: "Concept Refinement",
			content:
				"We analyze your product idea, identify core features for MVP, conduct competitor research, and refine the concept to focus on essential functionality that validates your market hypothesis effectively.",
		},
		{
			img: "/assets/images/pages/gallery/process2.jpg",
			number: "02",
			title: " Rapid Prototyping",
			content:
				"We design user interfaces, develop core functionality, create interactive prototypes, and build functional MVPs using modern development frameworks that enable quick iterations and testing.",
		},
		{
			img: "/assets/images/pages/gallery/process3.jpg",
			number: "03",
			title: "Market Validation",
			content:
				"We conduct user testing sessions, gather feedback data, analyze user behavior, and validate market demand through real user interactions to prove concept viability before full development.",
		},
		{
			img: "/assets/images/pages/gallery/process4.jpg",
			number: "04",
			title: "Launch Preparation",
			content:
				"We optimize performance, deploy to production, set up analytics tracking, and prepare launch strategies that maximize user acquisition and provide data for future development decisions.",
		},
	];

	return (
		<section className="agenko-process pt-130">
			<div className="container">
				<div className="agenko-process-wrapper-two pf_fadeup">
					<div className="process-line"></div>
					<div className="row">
						{processContent.map((item, i) => (
							<div key={i} className="col-lg-3 col-md-6 col-sm-12">
								<div className="agenko-iconic-box style-eight mb-40">
									<span className="agenko-dot mb-20"></span>
									<div className="content">
										<span className="number">{item.number}</span>
										<h4 className="title">{item.title}</h4>
										<p>{item.content}</p>
									</div>
									<div className="thumbnail">
										<Image src={item.img} alt="img" width={300} height={300} />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const PricingForAll = () => {
	return (
		<section className="agenko-pricing pt-130">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="agenko-pricing-item style-one mb-20 pf_fadeup">
							<div className="shape shape-one">
								<span>
									<img
										src="/assets/images/pages/shape/shape1.png"
										alt="shape"
									/>
								</span>
							</div>
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
									<span className="sign">$</span>43/mo
								</div>
							</div>
							<div className="pricing-body">
								<p>
									We responsive user-friendly websites tailored to your ensuring
									seamless functionality, engaging design.
								</p>
							</div>
						</div>

						<div className="agenko-pricing-item style-two mb-20 pf_fadeup">
							<div className="pricing-head">
								<h4>Standard</h4>
								<div className="pricing">
									<span className="sign">$</span>43/mo
								</div>
							</div>
							<div className="pricing-body">
								<p>
									We responsive user-friendly websites tailored to your ensuring
									seamless functionality, engaging design.
								</p>
							</div>
						</div>

						<div className="agenko-pricing-item style-two mb-20 pf_fadeup">
							<div className="pricing-head">
								<h4>Premium</h4>
								<div className="pricing">
									<span className="sign">$</span>43/mo
								</div>
							</div>
							<div className="pricing-body">
								<p>
									We responsive user-friendly websites tailored to your ensuring
									seamless functionality, engaging design.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

// end component
const MVPPage = () => {
	return (
		<div>
			<BreadCumb
				Title="MVP DEVELOPMENT DETAIL "
				content="Success Through Client Experiences"></BreadCumb>
			<ServicesDetailsMVPDevelopment />
			<ProcessForALL />
			<Pricing1></Pricing1>
			<Brand4></Brand4>
			<CallToAction/>
		</div>
	);
};

export default MVPPage;
