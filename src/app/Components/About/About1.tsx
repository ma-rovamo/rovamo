import Image from "next/image";
import Link from "next/link";
import React from "react";

const About1 = () => {
	return (
		<section className="agk-work-process pt-130 ">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<div className="section-title mb-50 pf_fadeup">
							<span className="sub-title">Why Choose Rovamo</span>
							<h2>Speed Expertise and AI acceleration that gives you competitive advantage</h2>
						</div>
					</div>
					{/* <div className="col-lg-5">
						<div className="text-box mb-55 pf_fadeup">
							<p>
								Creating cutting-edge digital experience that innovation and
								functionality to meet the evolving tomorrow’s businesses and
								users
							</p>
						</div>
					</div> */}
				</div>
				<div className="row">
					<div className="col-xl-3 col-md-6 col-sm-12">
						<div className="agenko-iconic-box style-two mb-40 pf_fadeup">
							<div className="icon">
								<i className="bi bi-binoculars"></i>
							</div>
							<div className="content">
								<h4 className="title">AI-Accelerated Delivery</h4>
								<p>
									We use cutting-edge AI tools to deliver in days what
									traditional agencies take months to complete.
								</p>
							</div>
						</div>
					</div>

					<div className="col-xl-3 col-md-6 col-sm-12">
						<div className="agenko-iconic-box style-two mb-40 pf_fadeup">
							<div className="icon">
								<i className="bi bi-binoculars"></i>
							</div>
							<div className="content">
								<h4 className="title">Proven Expertise 15+</h4>
								<p>
									15+ years of experience with Fortune 500 companies like
									Vodafone, Johnson & Johnson, and Novartis.
								</p>
							</div>
						</div>
					</div>

					<div className="col-xl-3 col-md-6 col-sm-12">
						<div className="agenko-iconic-box style-two mb-40 pf_fadeup">
							<div className="icon">
								<i className="bi bi-binoculars"></i>
							</div>
							<div className="content">
								<h4 className="title">Rapid Results</h4>
								<p>
									Over $100M in client business value generated through
									strategic digital transformation.
								</p>
							</div>
						</div>
					</div>

					<div className="col-xl-3 col-md-6 col-sm-12">
						<div className="agenko-iconic-box style-two mb-40 pf_fadeup">
							<div className="icon">
								<i className="bi bi-binoculars"></i>
							</div>
							<div className="content">
								<h4 className="title">Business Impact</h4>
								<p>
									From 48-hour MVPs to 7-day complete solutions, get to market
									faster than your competition.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
