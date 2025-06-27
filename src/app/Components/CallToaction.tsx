"use client";
import React from "react";
import Link from "next/link";
import BookACallModal from "./buttons/BookaCall";
import { Button } from "react-bootstrap";
import Image from "next/image";
const CallToAction = () => {
	return (
		<section className="cta-section py-5 primary-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-12 col-md-12 col-12 ">
						<div className="cta-content text-white pf_fadeup">
							<h2 className="mb-3">
								Ready to Transform Your Ideas into Intelligent Solutions?{" "}
							</h2>
							<p className="mb-0 fs-5">
								From 48-hour MVPs to complete AI-powered products, we deliver what traditional agencies build in months.
							</p>
							<div className="cta-button d-flex justify-content-center text-center mt-md-0 mt-4 py-4 pf_fadeup">
								<Link
									href={"https://cal.com/murtaza-akbar/discovery"}
									target="_blank">
									<Button
										variant="dark"
										className="d-flex align-items-center gap-2 px-3 py-2 pointer theme-btn style-one   rounded-pill shadow-sm gray-dark border-0 ">
										<div className="position-relative">
											<Image
												src="/murtaza.jpg"
												alt="Murtaza"
												width={32}
												height={32}
												className="rounded-circle border border-light"
											/>
										</div>
										<span className="text-flip">
											<span className="text ">
												Book a Call with Murtaza
											</span>
											<span className="text ">
												Book a Call with Murtaza
											</span>
										</span>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
