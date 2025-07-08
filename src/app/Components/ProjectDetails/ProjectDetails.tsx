import Image from "next/image";
import React from "react";
import { RevalioFlowchart } from "../MiroFlowchart";

const ProjectDetails = () => {
	return (
		<section className="agenko-project-details pt-130 pb-90">
			<div className="container">
				<div className="project-details-wrapper">
					{/* Hero Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image text-center mb-50 pf_fadeup">
								<Image
									src="/images/revalio/main-header.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Intro */}
					{/* <div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<h2 className="pf_fadeup">Revalio's MVP Platform</h2>
						</div>
						<div className="col-lg-8">
							<p>
								Revalio, a growing firm specializing in property tax consulting
								and property management, partnered with us at Rovamo to overcome
								significant operational inefficiencies. Their reliance on
								manual, disconnected processes was limiting their ability to
								scale and deliver a high-quality client experience. Our
								challenge was to design and develop a Minimum Viable Product
								(MVP) that would centralize both their property tax appeal and
								property management operations into a single, intuitive
								platform. We created a secure, client-facing portal that serves
								as a unified hub for document management, e-signatures, secure
								communication, and online payments, providing Revalio with a
								scalable foundation for future growth.
							</p>
						</div>
					</div> */}

					{/* Objectives */}
					<div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<h3 className="pf_fadeup">Objectives</h3>
						</div>
						<div className="col-lg-8">
							{/* <p>
								In our initial discovery phase with Revalio, our team defined
								several key objectives for the MVP to ensure it would deliver
								immediate value and validate their business concept.
							</p> */}
							<div className="lh-lg">
								<li>
									<b>Centralize multi-property tax management </b>  across jurisdictions and deadlines
								</li>
								<li>
									<b>Automate tax filing workflows </b> with smart reminders and status tracking
								</li>
								<li>
									<b>Streamline document management </b> with secure storage and e-signatures
								</li>
								<li>
									<b>Enhance stakeholder communication</b>  through integrated messaging systems
								</li>
							</div>
						</div>
					</div>

					{/* Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image text-center mb-50 pf_fadeup">
								<Image
										src="/images/revalio/revalio-1.jpg"
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
							<h3 className="pf_fadeup">The Challenge</h3>
						</div>
						<div className="col-lg-8">
							{/* <p>
								When Revalio approached Rovamo, their operations were being
								hampered by outdated, manual processes that could not keep pace
								with their growth. The core challenges we identified were:
							</p> */}
							<div className="lh-lg">
								<li>
									<b>Multi-jurisdiction compliance</b> with varying requirements and deadlines
								</li>
								<li>
									<b>Secure document handling</b> for sensitive tax information and workflows
								</li>
								<li>
									<b>Real-time status synchronization	</b> across properties and filing stages
								</li>
								<li>
									<b>Complex payment integration</b> supporting multiple methods and invoicing
								</li>
							</div>
						</div>
					</div>

					{/* Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
										src="/images/revalio/revalio-2.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
					</div>

					{/* Our Solution */}
					{/* <div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<h3 className="pf_fadeup">
								Our Solution: A Centralized MVP Platform
							</h3>
						</div>
						<div className="col-lg-8">
							<p>
								Our team at Rovamo engineered a user-centric web portal designed
								to be the definitive hub for Revalio and its users. The solution
								we built focused on four integrated features to address their
								core challenges head-on:
							</p>
							<div className="lh-lg">
								<li>
									<b>A Unified Property Dashboard:</b> We designed an intuitive
									dashboard that gives users a 360-degree view of their property
									portfolio. This serves as the central command center, with
									clear cards and notifications highlighting pending actions and
									important updates.
								</li>
								<li>
									<b>A Versatile Document & E-Signature Hub:</b> We developed a
									secure document manager capable of handling a wide range of
									files, from tax forms to lease agreements. Crucially, we
									integrated an e-signature workflow, allowing users to review
									and sign documents legally and instantly within the platform.
								</li>
								<li>
									<b>Secure Messaging System:</b> To eliminate insecure and
									disorganized email chains, we built a secure messaging system.
									This feature organizes all communication into clear,
									contextual threads, ensuring every conversation is documented
									and easily accessible.
								</li>
								<li>
									<b>A Streamlined Payment Manager:</b> We implemented a
									flexible payment module to manage invoices for both consulting
									fees and property-related charges (like rent or maintenance).
									It includes clear status tracking (Paid, Pending, Overdue) and
									integration with a payment gateway for instant online
									transactions.
								</li>
							</div>
						</div>
					</div> */}
					<div className="mb-5">
						<RevalioFlowchart />
					</div>

					{/* Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
										src="/images/revalio/revalio-3.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
					</div>

					{/* Results & Impact */}
					<div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<h3 className="pf_fadeup">Results</h3>
						</div>
						<div className="col-lg-8">
							{/* <p>
								The launch of the MVP we developed for Revalio delivered
								immediate, measurable value and successfully validated their
								vision for a unified platform.
							</p> */}
							<div className="lh-lg">
								<li>
									<b>60% faster tax filing process</b>from weeks to days across portfolios
								</li>
								<li>
									<b>Zero missed filing deadlines </b> eliminating $2,500 average penalty fees
								</li>
								<li>
									<b>75% faster communication</b> through centralized messaging threads
								</li>
								<li>
									<b>95% user satisfaction rate</b> with minimal training requirements
								</li>
							</div>
						</div>
					</div>

					{/* Final Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
										src="/images/revalio/revalio-4.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectDetails;
