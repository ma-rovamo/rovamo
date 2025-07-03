import BreadCumb from "../../../Components/Common/BreadCumb";
import React from "react";
import Image from "next/image";
import CallToAction from "../../../Components/CallToaction";
import { LocentrixBrandFlowchart } from "../../../Components/MiroFlowchart";
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
									src="/images/locentrix/locentrix-1.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Intro Section */}
					<div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<h2 className="pf_fadeup">
								Connecting Brands, Brokers, and Shopping Centers with a Unified
								MVP
							</h2>
						</div>
						<div className="col-lg-8">
							<p className="pf_fadeup">
								A visionary client in the commercial real estate (CRE) sector
								approached Rovamo with a mission to disrupt the outdated and
								fragmented process of retail leasing. The industry relied on
								disconnected relationships, manual outreach, and a lack of
								centralized data, making it incredibly inefficient for growing
								brands to find new locations, for shopping centers to fill
								vacancies, and for brokers to manage deals. Our challenge was to
								design and develop Locentrix, a Minimum Viable Product (MVP)
								that would serve as a sophisticated, multi-sided marketplace. We
								created a data-driven platform with distinct, role-specific
								experiences for Brands, Shopping Centers, and Brokers,
								transforming a complex ecosystem into a streamlined and
								intelligent network.
							</p>
						</div>
					</div>

					{/* Objectives */}
					<div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<h3 className="pf_fadeup">Objectives</h3>
						</div>
						<div className="col-lg-8">
							<p className="pf_fadeup">
								In our initial discovery phase, we collaborated with the client
								to define four critical objectives that would ensure the
								Locentrix MVP delivered immediate value and validated its
								potential to revolutionize the CRE leasing market.
							</p>
							<div className="lh-lg">
								<li>
									<b>Digitize the Discovery & Matching Process:</b> To replace
									inefficient, relationship-based prospecting with a powerful,
									algorithm-driven engine that objectively matches brands with
									ideal shopping center locations based on deep criteria.
								</li>
								<li>
									<b>Create a Symbiotic, Multi-Sided Ecosystem:</b> To build a
									single platform where all three key stakeholders—Brands,
									Shopping Centers, and Brokers—could interact, manage
									workflows, and find opportunities in a transparent and
									cohesive environment.
								</li>
								<li>
									<b>Deliver Data-Driven, Actionable Insights:</b> To empower
									users with quantifiable data, such as detailed "Match Scores,"
									deal pipeline analytics, and lead management funnels, enabling
									them to move from guesswork to strategic decision-making.
								</li>
								<li>
									<b>Develop a Scalable, Market-Ready MVP:</b> To engineer a
									robust and secure foundation that could launch quickly to test
									the core business model while being flexible enough to scale
									and accommodate future features and a growing user base.
								</li>
							</div>
						</div>
					</div>

					{/* Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image text-center mb-50 pf_fadeup">
								<Image
									src="/images/locentrix/locentrix-2.jpg"
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
							<p className="pf_fadeup">
								Before Locentrix, the retail leasing landscape was defined by
								friction and missed opportunities. The core challenges we needed
								to solve were:
							</p>
							<div className="lh-lg">
								<li>
									<b>A Fragmented and Opaque Ecosystem:</b> Brands seeking to
									expand had no central place to find viable locations that fit
									their specific needs. Likewise, shopping centers struggled to
									identify and attract the right kind of tenants to create a
									vibrant retail mix.
								</li>
								<li>
									<b>Inefficient, Relationship-Based Deal Flow:</b> The process
									was heavily reliant on cold calls, email chains, and personal
									networks. This made deal sourcing slow and limited the scope
									of opportunities for all parties involved, especially for
									those outside established circles.
								</li>
								<li>
									<b>Absence of Data-Driven Decision-Making:</b> Critical
									leasing decisions were often based on intuition rather than
									objective data. Brands couldn't easily quantify a location's
									fit, and landlords couldn't scientifically prove their center
									was the right choice for a target tenant.
								</li>
								<li>
									<b>Missed Opportunities and Slow Growth:</b> The sheer time
									and administrative overhead required to identify, vet, and
									close a deal meant that promising matches were often missed,
									slowing down expansion plans for brands and increasing vacancy
									rates for centers.
								</li>
							</div>
						</div>
					</div>

					{/* Challenge Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
									src="/images/locentrix/locentrix-3.jpg"
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
					<div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<h3 className="pf_fadeup">
								Our Solution: A Multi-Sided CRE Intelligence Platform
							</h3>
						</div>
						<div className="col-lg-8">
							<p className="pf_fadeup">
								Rovamo engineered a comprehensive web application with a single,
								intelligent backend powering three distinct, user-centric
								frontends. Our solution was designed to bring order and
								efficiency to the ecosystem.
							</p>
							<div className="lh-lg">
								<li>
									<b>An Intelligent, Data-Driven Matching Engine:</b> At the
									heart of Locentrix is a proprietary algorithm. It processes a
									brand's detailed expansion criteria (e.g., co-tenant
									preferences, space requirements, target markets) and a
									center's profile (e.g., current tenant mix, available spaces)
									to generate a transparent, broken-down Match Score.
								</li>
								<li>
									<b>Role-Specific Dashboards for Every User:</b> We designed
									tailored experiences for each user type.
									<div className="ms-5">
										<b>For Brands:</b> A dashboard focused on expansion,
										allowing them to configure criteria and discover a curated
										list of high-match shopping centers.
									</div>
									<div className="ms-5">
										<b>For Shopping Centers:</b> A property management hub to
										showcase their center, manage available spaces, and
										proactively view a list of well-matched brands to target.
									</div>
									<div className="ms-5">
										<b>For Brokers:</b> A command center to manage their
										territory, track active deals through a visual pipeline
										(from LOI to negotiation), and nurture leads.
									</div>
								</li>
								<li>
									<b>Integrated Deal & Lead Management Tools:</b> To move users
									from discovery to action, we built-in workflow management.
									Brokers can manage their deal pipeline, and shopping centers
									can track their outreach to potential brand tenants, creating
									a clear and organized process.
								</li>
								<li>
									<b>A Centralized Communication & Newsfeed Hub:</b> We included
									a newsfeed to foster a sense of community and allow users to
									post updates—such as a brand announcing its search in a new
									market—to signal intent and generate organic opportunities.
								</li>
							</div>
						</div>
					</div>
					<div className="mb-5">
						<LocentrixBrandFlowchart />
					</div>
					{/* Solution Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
									src="/images/locentrix/locentrix-4.jpg"
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
							<h3 className="pf_fadeup">Results & Impact</h3>
						</div>
						<div className="col-lg-8">
							<p className="pf_fadeup">
								The Locentrix MVP we delivered successfully validated the
								client's vision, providing a powerful tool that was immediately
								embraced by its first users.
							</p>
							<div className="lh-lg">
								<li>
									<b>50% Faster Deal Sourcing for Brokers and Brands:</b> By
									replacing manual prospecting with data-driven matches, the
									platform drastically reduced the time required to build a
									qualified pipeline of opportunities.
								</li>
								<li>
									<b>
										30% Increase in High-Quality Lead Generation for Shopping
										Centers:
									</b>{" "}
									Landlords were no longer fishing in the dark. The platform
									proactively served them a list of brands that were an
									excellent fit, improving the quality and conversion rate of
									their outreach.
								</li>
								<li>
									<b>Unprecedented Market Clarity and Efficiency:</b> For the
									first time, all three sides of the transaction had access to a
									single source of truth, creating a level of transparency and
									efficiency that was previously impossible.
								</li>
								<li>
									<b>A Scalable Foundation for Market Disruption:</b> The
									successful MVP Rovamo delivered has provided our client with a
									robust, validated foundation to expand its features and
									disrupt the commercial real estate industry. This project
									showcases our ability to translate a complex, multi-faceted
									business challenge into a sleek, effective, and future-proof
									digital product.
								</li>
							</div>
						</div>
					</div>

					{/* Final Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
								src="/images/locentrix/locentrix-5.jpg"
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
const page = () => {
	return (
		<div>
			<BreadCumb
				Title="Locentrix - Commercial Real Estate Marketplace "
				 button="View Demo" 
				 link="https://locentrix.hellorovamo.com/"
				content="An intelligent matching platform that connects brands, shopping
centers, and brokers through data-driven algorithms and streamlined deal management tools."></BreadCumb>
			<ProjectDetails></ProjectDetails>
			<CallToAction />
		</div>
	);
};

export default page;
