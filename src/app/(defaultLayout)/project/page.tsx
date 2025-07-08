import BreadCumb from "../../Components/Common/BreadCumb";
import Project4 from "../../Components/Project/Project4";
import Link from "next/link";
import Image from "next/image";
import React from "react";
const Project2 = () => {
	const chooseContent = [
		{
			img: "/images/fintech/fintech-thumbnail.jpg",
			slug: "neural-markets",
			title: "Neural Markets - AI Investment Platform",
			cat1: "CRM Integration",
			cat2: "Business Intelligence",
		},
		{
			img: "/images/revalio/revalio-thumbnail.jpg",
			slug: "project-details",
			title: "Revalio - Property Tax Management Platform",
			cat1: "Web Application",
			cat2: "Full-Stack Development",
		},
		{
			img: "/images/equity/equity-thumbnail.jpg",
			slug: "equity-vantage",
			title: "Equity Vantage - Cap Table Management",
			cat1: "Web Design",
			cat2: "Frontend Development",
		},
		{
			img: "/images/enerlytics/enerlytics-thumbnail.jpg",
			slug: "enerlytics",
			title: "Enerlytics - Energy Management Platform",
			cat1: "UI/UX Design",
			cat2: "Data Visualization",
		},
		{
			img: "/images/locentrix/locentrix-thumbail.jpg",
			slug: "locentrix",
			title: "Locentrix - Retail Expansion Platform",
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
					{/* <div className="col-lg-5">
						<div className="agk-button mb-60 float-lg-end pf_fadeup">
							<Link href="/project" className="theme-btn style-one">
								<span className="text-flip">
									<span className="text">View All Work</span>
									<span className="text">View All Work</span>
								</span>
							</Link>
						</div>
					</div> */}
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
const page = () => {
	return (
		<div>
			<BreadCumb
				Title="Our Work"
				content="Our work shows how we build custom software to solve real business problems. Using AI-powered tools, we deliver a working Minimum Viable Product in just two weeks, providing practical and scalable solutions for clients ranging from growing startups to established enterprises."></BreadCumb>
			<Project2></Project2>
		</div>
	);
};

export default page;
