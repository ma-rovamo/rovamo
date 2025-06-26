import BreadCumb from "../../Components/Common/BreadCumb";
import Project2 from "../../Components/Project/Project2";
import Project4 from "../../Components/Project/Project4";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title="Project"
				content="Digital solutions that drive real business results - from $5M startups to $700M+ enterprises"></BreadCumb>
			<Project2></Project2>
		</div>
	);
};

export default page;
