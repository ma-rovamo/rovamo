import Image from "next/image";
import React from "react";

const TeamDetails = () => {
	return (
		<section className="agenko-team-details pt-130 pb-80">
			<div className="container">
				<div className="team-details-wrapper">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div className="agenko-image-box mb-50 pf_fadeup  ">
								<div className="agenko-image">
									<Image
										src="/murtaza.png"
										className="rounded-circle"
										alt="img"
										width={410}
										height={414}
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="member-info mb-50 pf_fadeup">
								<h2>Murtaza Akbar</h2>
								<span className="position">CEO & Founder</span>
								<p>
									With over a decade of experience transforming ideas into market-ready solutions, I founded Rovamo with a clear mission: to help businesses leverage technology as their competitive advantage. Drawing from my extensive background working with Fortune 500 companies and enterprise clients across multiple industries, I recognized that too many businesses struggle to bridge the gap between innovative ideas and practical implementation. My wealth of experience in product management, business analysis, and technical development led me to create Rovamo as a complete product development partner. My core philosophy remains simple yet powerful: technology should always serve business success, not complicate it.
								</p>

								<ul className="social-link">
									<li>
										<a
											href="https://www.linkedin.com/in/murt4z4/"
											target="_blank">
											<i className="bi bi-linkedin" style={{ color: '#0A66C2' }}></i>

										</a>
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

export default TeamDetails;
