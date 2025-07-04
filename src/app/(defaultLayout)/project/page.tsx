import BreadCumb from "../../Components/Common/BreadCumb";
import Project2 from "../../Components/Project/Project2";
import Project4 from "../../Components/Project/Project4";
import React from "react";

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
