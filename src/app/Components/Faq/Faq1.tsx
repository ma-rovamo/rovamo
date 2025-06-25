"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Faq1 = () => {
	const faqContent = [
		{
			title: "What services does Rovamo provide?",
			content:
				"Rovamo specializes in creating modern, responsive websites and web applications. We offer UI/UX design, full-stack development, e-commerce solutions, and custom web application development tailored to your specific business needs and goals.",
		},
		{
			title: "Can I update the website content myself?",
			content:
				"Absolutely! All websites built by Rovamo include user-friendly content management systems (CMS) that allow you to easily update text, images, add new pages, and make changes without any coding knowledge. We also provide training to ensure youre comfortable managing your site.",
		},
		{
			title: "How does Rovamo's web design process work?",
			content:
				"Our process begins with a discovery phase to understand your goals, followed by wireframing and design concepts. After your approval, we move to development, testing, and launch. Throughout the entire process, we maintain clear communication and regular updates to ensure your vision is realized.",
		},
		{
			title: "How long will my project take to complete?",
			content:
				"Project timelines vary based on complexity and scope. A basic website typically takes 4-6 weeks, while more complex projects may take 2-3 months. During our initial consultation, well provide a detailed timeline specific to your project requirements and goals.",
		},
		{
			title: "Does Rovamo offer website maintenance and support?",
			content:
				"Yes, we offer various maintenance packages to keep your site secure, up-to-date, and performing optimally. Our support includes regular updates, security monitoring, performance optimization, and technical assistance whenever you need help with your website.",
		},
		{
			title: "Can Rovamo redesign my existing website?",
			content:
				"Definitely! We specialize in website redesigns that improve both aesthetics and functionality. Our team will analyze your current site, identify areas for improvement, and create a modern, effective design that enhances user experience while maintaining your brand identity.",
		},
	];

	const [openItemIndex, setOpenItemIndex] = useState(0);

	const handleItemClick = (index) => {
		setOpenItemIndex(openItemIndex === index ? -1 : index);
	};

	return (
		<section className="agk-faq py-5 py-md-5 pt-lg-130 pb-lg-80">
			<div className="container">
				{/* Header Row */}
				<div className="row align-items-center mb-4 mb-lg-5">
					<div className="col-12 col-lg-7 mb-4 mb-lg-0">
						<div className="section-title mb-3 mb-lg-50 pf_fadeup text-center text-lg-start">
							<span className="sub-title">FAQ</span>
							<h2>Got Questions? We've Got Answers</h2>
						</div>
					</div>
					<div className="col-12 col-lg-5 text-center text-lg-end">
						<div className="faq-big-text d-none d-md-block">Faq's</div>
					</div>
				</div>

				{/* Content Row */}
				<div className="row align-items-center">
					{/* Image Section - Order changes on mobile */}
					<div className="col-12 col-xl-6 mb-5 mb-xl-0 order-2 order-xl-1">
						<div className="agk-image-box mb-4 mb-lg-50 pf_fadeup text-center text-xl-start">
							<div className="agk-image">
								<Image
									src="/assets/images/digital-agency/faq/faq1.jpg"
									alt="FAQ illustration"
									className="img-fluid"
									width={550}
									height={555}
									style={{ maxWidth: "100%", height: "auto" }}
								/>
							</div>
						</div>
					</div>

					{/* Accordion Section */}
					<div className="col-12 col-xl-6 order-1 order-xl-2 mb-5 mb-xl-0">
						<div className="agk-content-box mb-30">
							<div className="agk-accordion" id="accordionOne">
								{faqContent.map((item, index) => (
									<div
										key={index}
										className={`agenko-accordion-item mb-3 mb-lg-20 pf_fadeup ${
											index === openItemIndex ? "active" : ""
										}`}>
										<div
											onClick={() => handleItemClick(index)}
											className="pointer">
											<h6
												className="accordion-title position-relative pe-4"
												data-bs-toggle="collapse"
												data-bs-target={`#collapse-${index}`}
												aria-expanded={
													index === openItemIndex ? "true" : "false"
												}>
												{item.title}
												<span
													className="accordion-icon position-absolute"
													style={{
														right: "0",
														top: "50%",
														transform: "translateY(-50%)",
													}}>
													{index === openItemIndex ? "−" : "+"}
												</span>
											</h6>
										</div>
										<div
											id={`collapse-${index}`}
											className={`accordion-collapse accordion-content ${
												index === openItemIndex ? "show" : ""
											}`}
											data-bs-parent="#accordionOne">
											<div className="accordion-content">
												<p>{item.content}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq1;
