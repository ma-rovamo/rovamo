import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="agenko-footer gray-dark pt-130 primary-black-bg">
			<div className="shape shape-one">
				<span>
					<img
						className="rotate360"
						src="/assets/images/creative-agency/footer/element1.png"
						alt="Shape"
					/>
				</span>
			</div>
			<div className="shape shape-two">
				<span>
					<img
						className="rotate360"
						src="/assets/images/creative-agency/footer/element2.png"
						alt="Shape"
					/>
				</span>
			</div>
			<div className="shape shape-blur_one">
				<span></span>
			</div>
			<div className="shape shape-blur_two">
				<span></span>
			</div>

			<div className="footer-widget-area pb-80">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer-about-widget mb-40 pf_fadeup">
								<div className="footer-content">
									<div >
										<Link className="" href="/">
									<p className="fs-3 text-white">
										Rovamo
									</p>
								</Link>
									</div>
									<p>
										Crafting intelligent solutions for tomorrow's
										challenges
									</p>
									<form>
										<div className="form-group">
											<input
												type="email"
												className="form_control"
												placeholder="Email Address"
												name="email"
												required
											/>
											<label>
												<i className="far fa-envelope"></i>
											</label>
											<button className="theme-btn style-two">Subscribe</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-widget footer-contact-info-widget mb-40 pf_fadeup">
								<div className="footer-content mb-35">
									<h4 className="widget-title">Quick Links</h4>
									<ul className="footer-nav">
										<li>
											<Link href="/service/service-details">AI Consulting</Link>
										</li>
										<li>
											<Link href="/service/mvp-development-services">MVP Development</Link>
										</li>
										<li>
											<Link href="/service/product-design">Product Design</Link>
										</li>
										<li>
											<Link href="/service/web-development">Web Development</Link>
										</li>
										<li>
											<Link href="/service/no-code-development">No-Code Development</Link>
										</li>
										<li>
											<Link href="/service/requirements-management">Requirements Management</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-12 col-sm-12">
							<div className="row">
								<div className="col-md-5">
									<div className="footer-widget footer-nav-widget mb-40 pf_fadeup">
										<div className="footer-content mb-35">
											<h4 className="widget-title">Pages</h4>
											<ul className="footer-nav">
												<li>
													<Link href="/about">About us</Link>
												</li>
												<li>
													<Link href="/service">Services</Link>
												</li>
												<li>
													<Link href="/project">Portfolio</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-md-7">
									<div className="footer-widget footer-contact-widget mb-40 pf_fadeup">
										<div className="footer-content">
											<h4 className="widget-title">Contact</h4>
											<div className="agenko-iconic-box style-three mb-30">
												<div className="icon">
													<i className="bi bi-envelope"></i>
												</div>
												<div className="content">
													<h6>Email</h6>
													<p>
														<a href="mailto:info@agenko.com">
															{" "}
															ma@hellorovamo.com
														</a>
													</p>
												</div>
											</div>
											<div className="agenko-iconic-box style-three">
												<div className="icon">
													<i className="bi bi-laptop"></i>
												</div>
												<div className="content">
													<h6>Location</h6>
													<p>
													Remote 
													</p>
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

			<div className="footer-copyright">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="copyright-text">
								<p>
									&copy; 2025 <span>Rovamo</span> - All Rights Reserved.
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="copyright-nav">
								<ul>
									<li>
										<a href="#">Terms & Condition</a>
									</li>
									<li>
										<a href="#">Privacy Policy</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
