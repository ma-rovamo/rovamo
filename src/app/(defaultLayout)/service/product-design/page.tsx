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
										src="/images/services/product-design-header.jpg"
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
									<h2>Product Design Success Metrics</h2>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="agenko-counter-item">
											<div className="content">
												<h2>
													<span className="count">300</span>+
												</h2>
												<p>Design Projects Completed</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="agenko-counter-item">
											<div className="content">
												<h2>
													<span className="count">7</span>
												</h2>
												<p>Days Average Design Delivery</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="agenko-content-box mb-50 pf_fadeup">
								<p className="mb-20">
									Create interfaces that users love and businesses profit from
									through conversion-focused design. Our product design services
									have increased client conversion rates by an average of 65%
									while improving user satisfaction scores across 300+
									successful design projects.
								</p>
								<p className="mb-20">
									We offer a range of specialized product design services
									designed to address your unique user experience challenges.
									Through innovative design strategies and tailored solutions,
									our expertise ensures exceptional outcomes that drive
									engagement and revenue growth.{" "}
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
			title: "User Research & Discovery",
			content:
				"We conduct user interviews, analyze target audiences, research competitors, and gather insights about user behavior to create data-driven design decisions that resonate with your market.",
		},
		{
			img: "/assets/images/pages/gallery/process2.jpg",
			number: "02",
			title: " Visual Design Creation",
			content:
				"We create wireframes, develop visual concepts, design user interfaces, and establish design systems that align with your brand while optimizing for user experience and conversion goals.",
		},
		{
			img: "/assets/images/pages/gallery/process3.jpg",
			number: "03",
			title: "Interactive Prototyping",
			content:
				"We build Figma prototypes, create interactive demos, test user flows, and refine designs based on usability testing to ensure optimal user experience before development begins.",
		},
		{
			img: "/assets/images/pages/gallery/process4.jpg",
			number: "04",
			title: "Design Optimization ",
			content:
				"We conduct A/B testing, analyze user behavior, optimize conversion funnels, and continuously improve designs based on real user data to maximize business results and user satisfaction.",
		},
	];

	return (
		<section className="agenko-process pt-130">
			<div className="container">
				<div className="agenko-process-wrapper-two pf_fadeup">
					<div className="process-line"></div>
					<div className="row">
						{processContent.map((item, i) => (
							<div key={i} className="col-lg-3 col-md-6 col-sm-12 d-flex">
								<div className="agenko-iconic-box style-eight mb-40 w-100 d-flex flex-column">
									<span className="agenko-dot mb-20"></span>
									<div className="content mb-3">
										<span className="number">{item.number}</span>
										<h4 className="title">{item.title}</h4>
										<p>{item.content}</p>
									</div>
									<div className="thumbnail mt-auto">
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

// end component
const Page = () => {
	return (
		<div>
			<BreadCumb
				Title="PRODUCT DESIGN "
				content="We design intuitive, data-driven interfaces and user experiences that translate complex functionality into a simple and engaging product. Our focus is on creating a seamless journey that maximizes user adoption and satisfaction."></BreadCumb>
			<ServicesDetailsMVPDevelopment />
			<ProcessForALL />
			<Pricing1></Pricing1>
			<Brand4></Brand4>
			<CallToAction />
		</div>
	);
};

export default Page;
