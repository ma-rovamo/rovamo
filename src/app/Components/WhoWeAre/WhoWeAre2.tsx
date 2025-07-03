import React from "react";
import Image from "next/image";
const WhoWeAre2 = () => {
	return (
		<section className="agk-features gray-dark pt-120 pb-90">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="section-title mb-45 pf_fadeup">
							<span className="sub-title">How We Are</span>
							<h2>We are leading AI-powered innovation agency</h2>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="text-box mb-40 pf_fadeup">
							<p>
								We are a leading AI-powered innovation agency, specializing in
								intelligent solutions that drive business growth, enhance
								operational efficiency.
							</p>
						</div>
					</div>
				</div>
				<div className="row g-4">
					<div className="col-lg-3 col-md-6 col-sm-12 d-flex">
						<div className="agenko-iconic-box style-seven pf_fadeup w-100 d-flex flex-column p-3">
							<div className="icon mb-3">
								<i className="bi bi-search"></i> {/* Discovery icon */}
							</div>
							<div className="content mt-auto">
								<h4>Discovery</h4>
								<p>
									Deep business analysis and opportunity identification using
									AI-powered insights to understand your unique challenges and
									market position.
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 col-sm-12 d-flex">
						<div className="agenko-iconic-box style-seven pf_fadeup w-100 d-flex flex-column p-3">
							<div className="icon mb-3">
								<i className="bi bi-bar-chart-line"></i> {/* Strategy icon */}
							</div>
							<div className="content mt-auto">
								<h4>Strategy</h4>
								<p>
									Strategic roadmap development with ROI-focused prioritization
									and technical architecture planning for maximum business
									impact.
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 col-sm-12 d-flex">
						<div className="agenko-iconic-box style-seven pf_fadeup w-100 d-flex flex-column p-3">
							<div className="icon mb-3">
								<i className="bi bi-lightning-charge-fill"></i>{" "}
								{/* Execution icon */}
							</div>
							<div className="content mt-auto">
								<h4>Execution</h4>
								<p>
									Rapid 2-week MVP delivery using AI development tools while
									maintaining enterprise-grade quality and scalable
									architecture.
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 col-sm-12 d-flex">
						<div className="agenko-iconic-box style-seven pf_fadeup w-100 d-flex flex-column p-3">
							<div className="icon mb-3">
								<i className="bi bi-graph-up-arrow"></i> {/* Growth icon */}
							</div>
							<div className="content mt-auto">
								<h4>Growth</h4>
								<p>
									Ongoing optimization and scaling support with performance
									monitoring, user feedback analysis, and strategic guidance for
									sustained success.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre2;
