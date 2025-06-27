import Image from "next/image";
import React from "react";

const ProjectDetails = () => {
	return (
		<section className="agenko-project-details pt-130 pb-90">
			<div className="container">
				<div className="project-details-wrapper">
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image text-center mb-50 pf_fadeup">
								<Image
									src="/image.webp"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8">
							<div className="agenko-content-box mb-50 pf_fadeup">
								<h2>Revalio's MVP Platform</h2>
								<p>
									Revalio, a growing firm specializing in property tax
									consulting and property management, partnered with us at
									Rovamo to overcome significant operational inefficiencies.
									Their reliance on manual, disconnected processes was limiting
									their ability to scale and deliver a high-quality client
									experience. Our challenge was to design and develop a Minimum
									Viable Product (MVP) that would centralize both their property
									tax appeal and property management operations into a single,
									intuitive platform. We created a secure, client-facing portal
									that serves as a unified hub for document management,
									e-signatures, secure communication, and online payments,
									providing Revalio with a scalable foundation for future
									growth.
								</p>
							</div>
						</div>
						{/* <div className="col-lg-4">
							<div className="project-duration-box pf_fadeup">
								<div className="row">
									<div className="col-sm-6">
										<div className="agenko-info-box mb-30">
											<span className="title">Client</span>
											<h3>Envato</h3>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="agenko-info-box mb-30">
											<span className="title">Category</span>
											<h3>Web Design</h3>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="agenko-info-box mb-30">
											<span className="title">Start Date</span>
											<h3>07-02-2025</h3>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="agenko-info-box mb-30">
											<span className="title">End Date</span>
											<h3>22-02-2025</h3>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-content-box pf_fadeup">
								{/* <p>Creative Javanese is a skilled Lead Designer specializing in mobile design, blending artistic innovation with functional excellence. With expertise in user-centered design and mobile optimization, they craft intuitive, visually striking interfaces. Their approach combines cultural richness with modern trends, delivering seamless digital experiences that resonate with users and meet project goals.</p> */}
								<h3>Objectives</h3>
								<p>
									In our initial discovery phase with Revalio, our team defined
									several key objectives for the MVP to ensure it would deliver
									immediate value and validate their business concept.
								</p>
								<li>
									{" "}
									<b>Centralize Core Operations:</b> To create a single source
									of truth where all property-related activities—from tax
									filings to tenant communications and invoicing—could be
									managed and tracked.
								</li>{" "}
								<li>
									{" "}
									<b>Enhance Client & Tenant Experience:</b> To provide
									Revalio's clients and tenants with real-time visibility into
									their documents, requests, and payment statuses, replacing
									ambiguity with transparency and self-service capabilities.
								</li>{" "}
								<li>
									{" "}
									<b>Streamline Critical Workflows:</b> To automate and
									accelerate key processes by implementing digital workflows for
									document authorizations (e.g., tax forms, lease agreements)
									and online invoice payments.
								</li>{" "}
								<li>
									{" "}
									<b>Build a Scalable Foundation:</b> To develop a robust and
									flexible MVP that could serve as the core platform for future
									feature development, allowing the software to evolve with
									Revalio's business needs.
								</li>{" "}
								<div className="row">
									<div className="col-lg-12">
										<div className="agenko-image text-center mb-50 pf_fadeup">
											<Image
												src="https://assets.aceternity.com/tabs.png"
												alt="img"
												width={1290}
												height={600}
												className="img-fluid w-100 h-auto object-cover"
											/>
										</div>
									</div>
								</div>
								<div className="my-4">
									<h3>The Challenge</h3>
									<p>
										When Revalio approached Rovamo, their operations were being
										hampered by outdated, manual processes that could not keep
										pace with their growth. The core challenges we identified
										were:
									</p>
									<li>
										{" "}
										<b>Fragmented System</b> The team was juggling spreadsheets,
										email inboxes, and phone calls to manage both tax appeal
										cases and property management tasks, leading to data silos
										and a high risk of human error.
									</li>{" "}
									<li>
										{" "}
										<b>Administrative Overload:</b> A significant portion of
										their time was consumed by repetitive administrative work,
										such as tracking down signed documents, sending payment
										reminders, and answering routine status update questions
										from clients and tenants.
									</li>{" "}
									<li>
										{" "}
										<b>Inefficient and Insecure Processes:</b> Critical
										workflows, like getting lease agreements or tax
										authorizations signed, relied on the slow
										print-sign-scan-email method. Exchanging sensitive financial
										and personal information over email also posed a significant
										security risk.
									</li>{" "}
									<li>
										{" "}
										<b>Poor User Experience:</b> The lack of a centralized
										system meant that clients and tenants had no easy way to
										track progress or access important information, leading to
										frustration and a constant need to contact the Revalio team
										directly.
									</li>{" "}
								</div>
								{/* <p>
									Whether in a professional or personal context, The Challenge
									is designed to inspire growth, spark collaboration, and unlock
									hidden potential. It tests adaptability, strategic thinking,
									and teamwork, fostering an environment where participants can
									learn, improve, and excel. By embracing uncertainty and
									tackling high-stakes objectives,{" "}
								</p> */}
								<div className="row">
									<div className="col-lg-12">
										<div className="agenko-image mb-40 w-100">
											<Image
												src="/assets/images/pages/project/project-single2.jpg"
												alt="img"
												width={1290}
												height={600}
												className="img-fluid w-100 h-auto object-cover"
												style={{ objectFit: "cover" }}
											/>
										</div>
									</div>
									{/* <div className="col-lg-6">
										<div className="agenko-image mb-40">
											<Image
												src="/assets/images/pages/project/project-single3.jpg"
												alt="img"
												width={630}
												height={700}
											/>
										</div>
									</div> */}
									<h3>Our Solution: A Centralized MVP Platform</h3>
									<p>
										Our team at Rovamo engineered a user-centric web portal
										designed to be the definitive hub for Revalio and its users.
										The solution we built focused on four integrated features to
										address their core challenges head-on:
									</p>
									<li>
										{" "}
										<b>A Unified Property Dashboard:</b> TWe designed an
										intuitive dashboard that gives users a 360-degree view of
										their property portfolio. This serves as the central command
										center, with clear cards and notifications highlighting
										pending actions and important updates.
									</li>{" "}
									<li>
										{" "}
										<b>A Versatile Document & E-Signature Hub:</b> We developed
										a secure document manager capable of handling a wide range
										of files, from tax forms to lease agreements. Crucially, we
										integrated an e-signature workflow, allowing users to review
										and sign documents legally and instantly within the
										platform.
									</li>{" "}
									<li>
										{" "}
										<b>Streamline Critical Workflows:</b> To eliminate insecure
										and disorganized email chains, we built a secure messaging
										system. This feature organizes all communication into clear,
										contextual threads, ensuring every conversation is
										documented and easily accessible.
									</li>{" "}
									<li>
										{" "}
										<b>A Streamlined Payment Manager:</b> We implemented a
										flexible payment module to manage invoices for both
										consulting fees and property-related charges (like rent or
										maintenance). It includes clear status tracking (Paid,
										Pending, Overdue) and integration with a payment gateway for
										instant online transactions.
									</li>{" "}
									<div className="row">
									<div className="col-lg-12">
										<div className="agenko-image mb-40 w-100">
											<Image
												src="https://assets.aceternity.com/wobble-card.png"
												alt="img"
												width={1290}
												height={600}
												className="img-fluid w-100 h-auto object-cover"
												style={{ objectFit: "cover" }}
											/>
										</div>
									</div>
									</div>
									<div className="my-4">
										<h3> Results & Impact</h3>
										<p>
											The launch of the MVP we developed for Revalio delivered
											immediate, measurable value and successfully validated
											their vision for a unified platform.
										</p>
										<li>
											{" "}
											<b>60% Reduction in Administrative Work:</b> Our solution
											automated key workflows, drastically cutting down the time
											Revalio's staff spent on manual follow-ups and data entry.
										</li>{" "}
										<li>
											{" "}
											<b>75% Faster Document Turnaround:</b> The e-signature
											feature we implemented reduced the average time to receive
											signed documents from days to mere hours, accelerating
											everything from new client onboarding to lease execution.
										</li>{" "}
										<li>
											{" "}
											<b>Strengthened Client & Tenant Trust:</b> By providing a
											transparent, professional, and easy-to-use platform, our
											work significantly enhanced the user experience, leading
											to greater satisfaction and trust in the Revalio brand.
										</li>{" "}
										<li>
											{" "}
											<b>A Platform Built for Growth:</b> This successful MVP
											has provided Revalio with a robust and scalable foundation
											to build upon. It demonstrates Rovamo's ability to
											understand a complex business challenge and translate it
											into a tangible, effective, and future-proof digital
											product.
										</li>{" "}

									<div className="row">
									<div className="col-lg-12">
										<div className="agenko-image mb-40 w-100">
											<Image
												src="https://assets.aceternity.com/animated-modal.png"
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectDetails;
