"use client";
import React from "react";
import Link from "next/link";
import BookACallModal from "./buttons/BookaCall";
import { Button } from "react-bootstrap";
import Image from "next/image";
const CallToAction = () => {
	return (
		<div className="container my-5 py-3">
			<section
				className="cta-section py-5 position-relative"
				style={{
					backgroundColor: "var(--primary-black-color)",
					borderRadius: "12px",
					border: "1px solid var(--border-color)",
					boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
					overflow: "hidden",
				}}>
				{/* Decorative border elements */}
				<div
					className="position-absolute top-0 start-0 w-100"
					style={{
						background: "var(--primary-color)",
						height: "4px",
					}}></div>

				<div
					className="position-absolute top-0 end-0"
					style={{
						width: "150px",
						height: "150px",
						background:
							"radial-gradient(circle, rgba(156, 254, 79, 0.1) 0%, rgba(156, 254, 79, 0) 70%)",
						borderRadius: "50%",
						transform: "translate(30%, -30%)",
					}}></div>

				<div
					className="position-absolute bottom-0 start-0"
					style={{
						width: "200px",
						height: "200px",
						background:
							"radial-gradient(circle, rgba(156, 254, 79, 0.05) 0%, rgba(156, 254, 79, 0) 70%)",
						borderRadius: "50%",
						transform: "translate(-30%, 30%)",
					}}></div>

				<div className="container position-relative" style={{ zIndex: "1" }}>
					<div className="row align-items-center justify-content-center">
						<div className="col-lg-10 col-md-11 col-12">
							<div className="cta-content text-center pf_fadeup">
								<h2
									className="mb-4 fw-bold"
									style={{
										color: "var(--white-color)",
										fontFamily: "var(--heading-font)",
									}}>
									Ready to Transform Your Ideas into Intelligent Solutions?
								</h2>

								<p
									className="mb-4 fs-5 mx-auto"
									style={{
										maxWidth: "800px",
										color: "var(--text-color)",
										fontFamily: "var(--body-font)",
									}}>
									From 48-hour MVPs to complete AI-powered products, we deliver
									what traditional agencies build in months.
								</p>

								<div className="cta-button d-flex justify-content-center text-center mt-4 py-3 pf_fadeup">
									<Link
										href={"https://cal.com/murtaza-akbar/discovery"}
										target="_blank">
										<Button
											className="d-flex align-items-center gap-3 px-4 py-3 pointer theme-btn style-one rounded-pill shadow-sm border-0"
											style={{
												transition: "all 0.3s ease",
												backgroundColor: "var(--primary-color)",
												color: "var(--primary-black-color)",
												fontFamily: "var(--body-font)",
												fontWeight: "600",
											}}
											onMouseOver={(e) => {
												e.currentTarget.style.transform = "translateY(-3px)";
												e.currentTarget.style.boxShadow =
													"0 8px 15px rgba(156, 254, 79, 0.2)";
											}}
											onMouseOut={(e) => {
												e.currentTarget.style.transform = "translateY(0)";
												e.currentTarget.style.boxShadow =
													"0 4px 6px rgba(156, 254, 79, 0.1)";
											}}>
											<div
												className="position-relative"
												style={{
													boxShadow: "0 0 0 2px rgba(156, 254, 79, 0.3)",
												}}>
												<Image
													src="/murtaza.jpg"
													alt="Murtaza"
													width={40}
													height={40}
													className="rounded-circle border"
													style={{ borderColor: "var(--primary-color)" }}
												/>
											</div>
											<span className="text-flip">
												<span className="text fw-medium fs-5">
													Book a Call with Murtaza
												</span>
												<span className="text fw-medium fs-5">
													Book a Call with Murtaza
												</span>
											</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-arrow-right"
												viewBox="0 0 16 16">
												<path
													fillRule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</Button>
									</Link>
								</div>

								<div className="social-proof mt-5 d-flex flex-wrap justify-content-center gap-4">
									<div
										className="text-center px-3"
										style={{
											borderRight: `1px solid var(--border-color)`,
											paddingRight: "2rem",
										}}>
										<div className="d-flex justify-content-center mb-1">
											{[1, 2, 3, 4, 5].map((star) => (
												<svg
													key={star}
													xmlns="http://www.w3.org/2000/svg"
													width="18"
													height="18"
													fill="var(--primary-color)"
													className="bi bi-star-fill"
													viewBox="0 0 16 16">
													<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
												</svg>
											))}
										</div>
										<p
											style={{
												color: "var(--text-color)",
												fontFamily: "var(--body-font)",
											}}
											className="mb-0 small">
											Trusted by clients worldwide
										</p>
									</div>

									<div
										className="text-center px-3"
										style={{
											borderRight: `1px solid var(--border-color)`,
											paddingRight: "2rem",
										}}>
										<p className="mb-0 fw-bold">
											<span
												className="fs-4"
												style={{
													color: "var(--white-color)",
													fontFamily: "var(--heading-font)",
												}}>
												48hr
											</span>
											<span
												style={{
													color: "var(--text-color)",
													fontFamily: "var(--body-font)",
												}}
												className="ms-2 small d-block d-sm-inline">
												MVP Delivery
											</span>
										</p>
									</div>

									<div className="text-center px-3">
										<p className="mb-0 fw-bold">
											<span
												className="fs-4"
												style={{
													color: "var(--white-color)",
													fontFamily: "var(--heading-font)",
												}}>
												100%
											</span>
											<span
												style={{
													color: "var(--text-color)",
													fontFamily: "var(--body-font)",
												}}
												className="ms-2 small d-block d-sm-inline">
												Satisfaction
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom decorative pattern */}
				<div
					className="position-absolute bottom-0 start-0 w-100"
					style={{
						height: "40px",
						background:
							"linear-gradient(0deg, rgba(14, 15, 17, 0.5) 0%, rgba(14, 15, 17, 0) 100%)",
						opacity: "0.3",
					}}></div>
			</section>
		</div>
	);
};

export default CallToAction;
