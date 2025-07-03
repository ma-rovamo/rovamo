import Link from "next/link";
import React from "react";
import Image from "next/image";
const Project2 = () => {
	const chooseContent = [
		{
			img: "/images/revalio/revalio-thumbnail.jpg",
			slug: "project-details",
			title: "Revalio - Digital Property Tax Management",
			cat1: "Web Application",
			cat2: "Full-Stack Development",
		},
		{
			img: "/images/equity/equity-thumbnail.jpg",
			slug: "equity-vantage",
			title: "Equity Vantage - Smart Cap Table Management",
			cat1: "Web Design",
			cat2: "Frontend Development",
		},
		{
			img: "/images/enerlytics/enerlytics-thumbnail.jpg",
			slug: "enerlytics",
			title: "Enerlytics - Energy Analytics Platform",
			cat1: "UI/UX Design",
			cat2: "Data Visualization",
		},
		{
			img: "/images/locentrix/locentrix-thumbail.jpg",
			slug: "locentrix",
			title: "Locentrix - Commercial Real Estate Marketplace",
			cat1: "CRM Integration",
			cat2: "Business Intelligence",
		},
	];

	return (
		<section className="agk-project pt-130 pb-80">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<div className="section-title mb-60 pf_fadeup">
							<span className="sub-title">Our Work</span>
							<h2>Building Tomorrow Digital Experiences Today</h2>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="agk-button mb-60 float-lg-end pf_fadeup">
							<Link href="/project" className="theme-btn style-one">
								<span className="text-flip">
									<span className="text">View All Work</span>
									<span className="text">View All Work</span>
								</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="row">
					{chooseContent.map((item, i) => (
						<div key={i} className="col-lg-6">
							<div className="agenko-project-item style-one mb-45 pf_fadeup">
								<div className="thumbnail">
									<Link href={`/project/${item.slug}`}>
									<img
										src={item.img}
										className="image-fluid"
										alt="Project Image"
										/>
										</Link>
									<div className="project-button">
										<Link href={`/project/${item.slug}`}>
											{/* <i className="bi bi-eye"></i> */}
											<Image
												src="/eye.apng"
												alt="code-icon"
												loading="lazy"
												width={30} // Adjust this size as per design
												height={30}
												className="img-fluid d-block mx-auto" // Bootstrap utilities for responsive and centered
											/>
										</Link>
									</div>
								</div>
								<div className="content">
									<h4 className="title">
										<Link href={`/project/${item.slug}`}>{item.title}</Link>
									</h4>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Project2;
