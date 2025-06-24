import BreadCumb from "../../../Components/Common/BreadCumb";
import ProjectDetails from "../../../Components/ProjectDetails/ProjectDetails";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title="Project Details"
				content="See how we transformed business challenges into measurable results using AI-accelerated development"></BreadCumb>
			<ProjectDetails></ProjectDetails>
		</div>
	);
};

export default page;
