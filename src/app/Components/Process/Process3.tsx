import Image from "next/image";
import React from "react";

const Process3 = () => {
	const processContent = [
		{
			img: "/assets/images/pages/gallery/process1.jpg",
			number: "01",
			title: "AI Research & Analysis ",
			content:
				"We conduct comprehensive AI readiness assessments, identify automation opportunities, analyze existing workflows, and evaluate technical infrastructure to determine optimal AI integration points for maximum business impact.",
		},
		{
			img: "/assets/images/pages/gallery/process2.jpg",
			number: "02",
			title: "Strategy Development",
			content:
				"We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.",
		},
		{
			img: "/assets/images/pages/gallery/process3.jpg",
			number: "03",
			title: "Implementation Planning",
			content:
				"We design AI solution architectures, select appropriate technologies, create implementation timelines, and develop integration strategies that ensure seamless deployment without disrupting existing operations.",
		},
		{
			img: "/assets/images/pages/gallery/process4.jpg",
			number: "04",
			title: "Optimization & Support",
			content:
				"We monitor AI performance metrics, optimize algorithms for better results, provide ongoing training and support, and continuously refine solutions to ensure maximum return on investment.",
		},
	];

	return (
		<section className="agenko-process pt-130">
			<div className="container">
				<div className="agenko-process-wrapper-two pf_fadeup">
					<div className="process-line"></div>
					<div className="row">
						{processContent.map((item, i) => (
							<div key={i} className="col-lg-3 col-md-12 col-sm-12 d-flex">
								<div className="agenko-iconic-box style-eight mb-40 w-100 d-flex flex-column">
									<span className="agenko-dot mb-20"></span>
									<div className="content mb-3">
										<span className="number">{item.number}</span>
										<h4 className="title">{item.title}</h4>
										<p>{item.content}</p>
									</div>
									<div className="thumbnail mt-auto">
										<Image src={item.img} alt="img" width={300} height={300} />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process3;
