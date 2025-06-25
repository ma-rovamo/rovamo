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
				<div className="row align-items-center">
						<div className="col-12 col-xl-5 mb-4 mb-xl-0">
						<div className="agk-content-box pf_fadeup">
								<div className="section-title mb-4">
								<span className="sub-title">How We Deliver Results</span>
								<h4 className="fs-3">
									Our proven process that transforms business challenges into
									digital solutions
								</h4>
							</div>
							<ul className="check-list style-one mb-40">
								<li>
									<i className="bi bi-check2-circle"></i>
									<div>
										<strong>Discovery & Strategy</strong>
										<br />
										<small>
											We analyze your business goals, market position, and user needs to create a comprehensive strategy that drives results.
										</small>
									</div>
								</li>

								<li>
									<i className="bi bi-check2-circle"></i>
									<div>
										<strong> Design & Planning</strong>
										<br />
										<small>
											We create detailed plans, user experiences, and technical roadmaps that align with your objectives and timeline.
										</small>
									</div>
								</li>

								<li>
									<i className="bi bi-check2-circle"></i>
									<div>
										<strong>Development & Testing</strong>
										<br />
										<small>
										We build, test, and optimize your solution using proven methodologies and quality assurance processes.
										</small>
									</div>
								</li>

								<li>
									<i className="bi bi-check2-circle"></i>
									<div>
										<strong>Launch & Growth</strong>
										<br />
										<small>
											We deploy your solution and provide ongoing optimization to ensure continued success and business growth.
										</small>
									</div>
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
        overflow: "hidden",         // hides any scroll
        whiteSpace: "nowrap",       // keeps text in one line
        textOverflow: "ellipsis",   // trims safely if needed
      }}
    >
      <h2
        className="text-anm-two d-inline-block"
        style={{
          fontSize: "clamp(1.5rem, 6vw, 4rem)",
          maxWidth: "100%",
        }}
      >
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
