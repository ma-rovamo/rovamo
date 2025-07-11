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
								<div className="agenko-image w-full overflow-hidden">
									<Image
										src="/images/services/requirments.jpg"
										alt="Requirements Engineering Services"
										width={1290}
										height={500}
										className="w-full h-auto object-cover"
										priority
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
									<h2>Requirements Engineering Success Metrics</h2>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="agenko-counter-item">
											<div className="content">
												<h2>
													<span className="count">85% </span>
												</h2>
												<p>Reduction in Scope Creep</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="agenko-counter-item">
											<div className="content">
												<h2>
													<span className="count">40</span>%
												</h2>
												<p>Faster Development Cycles</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="agenko-content-box mb-50 pf_fadeup">
								<p className="mb-20">
									Align technical capabilities with business objectives through
									comprehensive requirements analysis. Our consulting services
									have saved clients 60% in development costs by preventing
									scope creep and ensuring clear project definitions across 250+
									successful consulting engagements.
								</p>
								<p className="mb-20">
									We offer a range of specialized requirements consulting
									services designed to address your unique project planning
									challenges. Through innovative analysis strategies and
									tailored solutions, our expertise ensures exceptional outcomes
									that prevent costly mistakes.
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
			title: " Requirements Discovery & Analysis ",
			content:
				"We conduct comprehensive stakeholder interviews, analyze existing systems, identify business objectives, and establish project foundations using proven discovery methodologies for thorough requirements gathering.",
		},
		{
			img: "/assets/images/pages/gallery/process2.jpg",
			number: "02",
			title: " Documentation & Specification",
			content:
				"We create detailed functional specifications, document technical requirements, establish acceptance criteria, and develop comprehensive requirement documents that enable rapid iteration and professional results without ambiguity.",
		},
		{
			img: "/assets/images/pages/gallery/process3.jpg",
			number: "03",
			title: " Validation & Prioritization ",
			content:
				"We validate requirements with stakeholders, prioritize features using proven frameworks, establish traceability matrices, and create roadmaps that ensure comprehensive solutions meet all business requirements.",
		},
		{
			img: "/assets/images/pages/gallery/process4.jpg",
			number: "04",
			title: " Handoff & Implementation Support ",
			content:
				"We conduct thorough requirement reviews, provide development team training, establish change management processes, and provide ongoing support to ensure seamless operation and user adoption of your requirements framework.",
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
				Title="REQUIREMENTS MANAGEMENT  "
				content="We establish a precise blueprint for your product by meticulously defining, documenting, and prioritizing all functional and technical requirements. This critical step eliminates ambiguity and ensures our rapid development is perfectly aligned with your business goals."></BreadCumb>
			<ServicesDetailsMVPDevelopment />
			<ProcessForALL />
			<Pricing1></Pricing1>
			<Brand4></Brand4>
			<CallToAction />
		</div>
	);
};

export default Page;
