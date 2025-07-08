import BreadCumb from "../../../Components/Common/BreadCumb";
import React from "react";
import Image from "next/image";
import CallToAction from "../../../Components/CallToaction";
import { EquityVantageFlowchart } from "../../../Components/MiroFlowchart";
const ProjectDetails = () => {
	return (
		<section className="agenko-project-details pt-130 pb-90">
			<div className="container">
				<div className="project-details-wrapper">
					{/* Top Banner Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image text-center mb-50 pf_fadeup">
								<Image
									src="/images/equity/equity-1.jpg"
									alt="img"
									width={1290}
									height={600}
									className="img-fluid w-100 h-auto object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Intro Text */}
					{/* <div className="row align-items-start mb-5">
						<div className="col-lg-4">
							<div className="pf_fadeup">
								<h2>
									Equity Vantage Platform
								</h2>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="pf_fadeup">
								<p>
									Our client, an ambitious fintech visionary, approached Rovamo
									to tackle a persistent and high-stakes problem for private
									companies: the chaos of managing company equity. Relying on
									complex, error-prone spreadsheets, these businesses lacked a
									clear, reliable view of their ownership structure, creating
									significant risk during fundraising, audits, and employee
									compensation. Rovamo was brought on as the end-to-end
									technology partner to design and develop Equity Vantage, a
									Minimum Viable Product (MVP) that would serve as a
									centralized, intuitive, and secure SaaS platform for modern
									equity management. Our mission was to transform a complex
									concept into a market-ready product that provides clarity and
									control over cap tables, funding rounds, and compliance.
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
									From our initial discovery workshops, we collaborated with the
									client to define four critical objectives that would ensure
									the MVP delivered immediate, tangible value and set a strong
									foundation for future success.
								</p> */}
								<div className="lh-lg">
									<li>
										<b>Streamline multi-company equity management</b> from single dashboard
									</li>
									<li>
										<b>Automate compliance tracking </b> with intelligent alerts and deadlines
									</li>
									<li>
										<b>Enhance transparency</b> with real-time reporting and analytics
									</li>
									<li>
										<b>Reduce administrative burden</b>  through automated workflows
									</li>
								</div>
							</div>
						</div>
					</div>

					{/* Objectives Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image text-center mb-50 pf_fadeup">
								<Image
									src="/images/equity/equity-2.jpg"
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
							<div className="pf_fadeup">
								<h3>The Challenge</h3>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="pf_fadeup">
								{/* <p>
									Before Rovamo's involvement, the process of equity management
									for the target audience was defined by inefficiency and risk.
									The primary challenges we needed to solve were:
								</p> */}
								<div className="lh-lg">
									<li>
										<b>Complex multi-entity architecture </b> with distinct structures and compliance needs
									</li>
									<li>
										<b>Real-time data synchronization </b>  across transactions and corporate actions
									</li>
									<li>
										<b>Multi-stakeholder user experience </b>  balancing functionality with intuitive navigation
									</li>
									<li>
										<b>Enterprise security requirements </b>  for sensitive financial data and audit trails
									</li>
									
								</div>
							</div>
						</div>
					</div>

					{/* Challenge Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
									src="/images/equity/equity-3.jpg"
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
								<h3>
									Our Solution: A Multi-Module Equity Intelligence Platform
								</h3>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="pf_fadeup">
								<p>
									Rovamo engineered a comprehensive, user-centric web platform
									designed to be the definitive command center for all
									equity-related activity. Our solution was built around four
									integrated pillars to address our client's challenges head-on:
								</p>
								<div className="lh-lg">
									<li>
										<b>The Interactive Dashboard & Reporting Hub:</b> We
										designed a high-level dashboard that gives users an instant,
										360-degree view of their company's equity health. Featuring
										key metrics, a visual share distribution chart, and a
										funding history graph, it transforms complex data into
										actionable intelligence at a glance.
									</li>
									<li>
										<b>A Unified Cap Table Ledger:</b> To create a single source
										of truth, we developed a set of interconnected modules for
										Stakeholders, Share Classes, Share Transactions, and Funding
										Rounds. This structure ensures that every piece of data is
										linked and consistent, providing a fully auditable and
										always-accurate cap table.
									</li>
									<li>
										<b>Streamlined Equity Grant Workflows:</b> We built a
										dedicated Equity Grants module to manage employee stock
										options and RSUs from creation to vesting. Issuing new
										grants, tracking vesting schedules, and updating stakeholder
										records became a simple, automated process, eliminating
										manual data entry.
									</li>
									<li>
										<b>A Proactive Compliance Tracker:</b> To solve the
										compliance challenge, we developed a task management module
										specifically for corporate governance. This allows
										administrators to track key deadlines for tasks like annual
										filings, board meetings, and tax preparations, complete with
										status, priority, and descriptions.
									</li>
								</div>
							</div>
						</div>
					</div> */}

					<div className="mb-5">
						<EquityVantageFlowchart />
					</div>

					{/* Solution Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
									src="/images/equity/equity-4.jpg"
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
							<div className="pf_fadeup">
								<h3>Results</h3>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="pf_fadeup">
								{/* <p>
									The launch of the Equity Vantage MVP was a resounding success,
									delivering immediate value to the client and its first users
									while validating the core business concept.
								</p> */}
								<div className="lh-lg">
									<li>
										<b>40% reduction in administrative time</b> through automated workflows
									</li>
									<li>
										<b>Zero missed compliance deadlines </b> with proactive alerts and tracking
									</li>
									<li>
										<b>70% faster due diligence preparation </b> for funding rounds
									</li>
									<li>
										<b>90% user adoption rate </b> within first month of implementation
									</li>
								</div>
							</div>
						</div>
					</div>

					{/* Results Image */}
					<div className="row">
						<div className="col-lg-12">
							<div className="agenko-image mb-40 w-100">
								<Image
									src="/images/equity/equity-5.jpg"
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
				Title="Equity Vantage Platform "
				button="View Demo" 
				 link="https://fundmgmnt.netlify.app/"
				content="An enterprise platform that replaces spreadsheet-based equity
management with real-time cap tables, automated compliance tracking, and comprehensive reporting"></BreadCumb>
			<ProjectDetails></ProjectDetails>
			<CallToAction />
		</div>
	);
};

export default page;

// Equity Vantage - Smart Cap Table Management