import BreadCumb from "../../../Components/Common/BreadCumb";
import React from "react";
import Image from "next/image";
import CallToAction from "../../../Components/CallToaction";
import { EnerlyticsCustomerFlowchart } from "../../../Components/MiroFlowchart";
const ProjectDetails = () => {
	return (
		<section className="agenko-project-details pt-130 pb-90">
			<div className="container">
				<div className="project-details-wrapper">
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image text-center mb-50 pf_fadeup">
								<Image
									src="/images/enerlytics/main-header.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Heading and Content Row */}
					{/* <div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<div className="pf_fadeup">
								<h2>
									Powering Smarter Energy Decisions for Portfolios and People
								</h2>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="pf_fadeup">
								<p>
									An innovative energy-tech leader partnered with us at Rovamo
									to solve a fundamental disconnect in the property sector:
									portfolio managers lacked the real-time data to make
									effective, large-scale energy efficiency investments, while
									residents lacked the personalized insights to reduce their own
									consumption. This data gap resulted in inefficient spending,
									missed ESG targets, and disengaged tenants. Our challenge was
									to design and develop a Minimum Viable Product (MVP) that
									would bridge this divide. We created Enerlytics, a
									sophisticated, dual-sided platform that provides a strategic
									command center for property managers and a personalized energy
									hub for residents, creating a powerful, symbiotic ecosystem
									for driving down costs and carbon emissions.
								</p>
							</div>
						</div>
					</div> */}

					{/* Objectives */}
					<div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<div className="pf_fadeup">
								<h3>Objectives</h3>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="pf_fadeup">
								{/* <p>
									During our discovery phase, we collaborated with the client to
									establish four core objectives for the Enerlytics MVP,
									ensuring it would deliver immediate value and validate their
									transformative business model.
								</p> */}
								<ul className="lh-lg list-unstyled">
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>Intelligent energy monitoring</b> with real-time smart
											meter integration
										</span>
									</li>
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>Automated retrofit planning</b> using AI-driven
											property assessments
										</span>
									</li>
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>Multi-portfolio management</b> with centralized
											reporting and benchmarking
										</span>
									</li>
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>Streamlined grant access</b> integrating funding
											opportunities automatically
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Objectives Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image text-center mb-50 pf_fadeup">
								<Image
									src="/images/enerlytics/enerlytics-2.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Challenge */}
					<div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<div className="pf_fadeup ">
								<h3>The Challenge</h3>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="pf_fadeup">
								{/* <p>
									Before Enerlytics, both sides of the energy equation were
									operating with incomplete information, creating significant
									barriers to progress.
								</p> */}
								<ul className="lh-lg list-unstyled">
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>Smart meter integration</b> across multiple utility
											providers and systems
										</span>
									</li>
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>Multi-stakeholder experience</b> for homeowners,
											managers, and government
										</span>
									</li>
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>Sophisticated ROI modeling</b> accounting for
											property-specific variables
										</span>
									</li>
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>Scalable assessment systems</b> processing thousands of
											properties efficiently
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Challenge Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
									src="/images/enerlytics/enerlytics-3.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
					</div>

					{/* Solution */}
					{/* <div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<div className="pf_fadeup">
								<h3>Our Solution: A Dual-Sided Analytics Platform</h3>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="pf_fadeup">
								<p>
									Our team at Rovamo engineered two distinct but interconnected
									interfaces, powered by a single, intelligent backend to turn
									raw data into actionable intelligence.
								</p>
								<div className="lh-lg">
									<li>
										<b>The Client Dashboard (B2B):</b> We built a comprehensive
										strategic command center for portfolio managers. This
										features advanced filtering to segment the entire property
										portfolio, a detailed drill-down view for individual
										property analysis (including pre- and post-intervention
										modeling), and a reporting suite with dedicated tabs for
										performance, financial, and environmental impact analysis.
									</li>
									<li>
										<b>The Customer Dashboard (B2C):</b> For residents, we
										designed a user-friendly personal energy hub. This
										simplifies energy management with daily usage charts, clear
										widgets showing CO₂ and cost savings, and personalized
										recommendations. We separated advice into major "Retrofit
										Options" and simple "Saving Tips" to make action accessible
										for everyone.
									</li>
									<li>
										<b>Seamless Smart Meter Integration:</b> The cornerstone of
										the platform is a secure and simple user onboarding process
										that connects to the resident's smart meter. This critical
										step unlocks the real-time data that fuels the insights for
										both dashboards.
									</li>
								</div>
							</div>
						</div>
					</div> */}
					<div className="mb-5">
						<EnerlyticsCustomerFlowchart />
					</div>
					{/* Solution Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
									src="/images/enerlytics/enerlytics-4.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
					</div>

					{/* Results Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
									src="/images/enerlytics/enerlytics-5.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
					</div>

					{/* Results */}
					<div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<div className="pf_fadeup">
								<h3>Results</h3>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="pf_fadeup">
								{/* <p>
									The Enerlytics MVP we delivered successfully validated our
									client's vision and provided immediate, tangible value to its
									first users.
								</p> */}
								<ul className="lh-lg list-unstyled">
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>40% faster energy assessments</b> from weeks to hours
											for large portfolios
										</span>
									</li>
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>£320,000 annual savings identified</b> across 1,248
											managed properties
										</span>
									</li>
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>94.8% compliance rate</b> with automated EPC tracking
											and reporting
										</span>
									</li>
									<li className="d-flex align-items-start gap-2">
										<i
											className="bi bi-dot"
											style={{ color: "#00C27C", fontSize: "1.25rem" }}></i>
										<span>
											<b>15.3% energy consumption reduction</b> through smart
											analytics and optimization
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
const page = () => {
	return (
		<div>
			<BreadCumb
				Title="Enerlytics - Energy Management Platform "
				button="View Demo"
				link="https://enerlytics.hellorovamo.com/"
				content="A dual-sided platform connecting property managers and residents
through smart meter integration, providing actionable insights for energy optimization and cost savings"></BreadCumb>
			<ProjectDetails></ProjectDetails>
			<CallToAction />
		</div>
	);
};

export default page;
// Title = "Enerlytics - Energy Analytics Platform ";
