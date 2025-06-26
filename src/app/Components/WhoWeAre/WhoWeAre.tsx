"use client";
import React, { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";
import Image from "next/image";

const WhoWeAre = () => {
	const [iframeSrc, setIframeSrc] = useState("about:blank");
	const [toggle, setToggle] = useState(false);

	const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	};
	const handelClose = () => {
		setIframeSrc("about:blank");
		setToggle(!toggle);
	};

	return (
		<section className="agk-who-we gray-dark pt-130 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-xl-5">
						<div className="agk-content-box mb-50 pf_fadeup">
							<div className="section-title mb-30">
								<span className="sub-title">What We Are</span>
								<h2>Your Trusted Partner for Digital Success</h2>
							</div>
							<ul className="check-list style-one mb-40">
								<li>
									<i className="bi bi-check2-circle"></i> Rapid Development For Fast Results
								</li>
								<li>
									<i className="bi bi-check2-circle"></i>Business & Strategic Creative Innovation
								</li>
								<li>
									<i className="bi bi-check2-circle"></i>Proven Fortune 500 Client Experience
								</li>
								<li>
									<i className="bi bi-check2-circle"></i> Perfect & Modern Work Results-Driven
								</li>
								<li>
									<i className="bi bi-check2-circle"></i> 48-Hour MVP Development & Deployment
								</li>
							</ul>
							<div className="agk-button">
								<Link href="/pricing" className="theme-btn style-one">
									<span className="text-flip">
										<span className="text">LEARN MORE</span>
										<span className="text">LEARN MORE</span>
									</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-xl-7">
						<div className="agk-play-image-box mb-50 pf_fadeup">
							<div className="agk-image style-four">
								<Image
									src="/assets/images/digital-agency/features/who1.jpg"
									className="rounded-2"
									alt="img"
									width={743}
									height={501}
								/>
								<div onClick={handelClick} className="play-box">
									<a className="video-popup">
										<i className="bi bi-play-fill"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row m-0">
					<div className="col-12 px-3">
						<div
							className="big-text text-center mt-5 pt-5"
							style={{
								overflow: "hidden", // hides any scroll
								whiteSpace: "nowrap", // keeps text in one line
								textOverflow: "ellipsis", // trims safely if needed
							}}>
							<h2
								className="text-anm-two d-inline-block"
								style={{
									fontSize: "clamp(1.5rem, 6vw, 7rem)",
									maxWidth: "100%",
								}}>
								AI-POWERED INNOVATION
							</h2>
						</div>
					</div>
				</div>
			</div>

			<VideoModal
				isTrue={toggle}
				iframeSrc={iframeSrc}
				handelClose={handelClose}></VideoModal>
		</section>
	);
};

export default WhoWeAre;
