import BreadCumb from "../../../Components/Common/BreadCumb";
import ProjectDetails from "../../../Components/ProjectDetails/ProjectDetails";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title="Revalio Details"
				content="Building a Unified MVP for Property and Tax Management"></BreadCumb>
			<ProjectDetails></ProjectDetails>
		</div>
	);
};

export default page;
