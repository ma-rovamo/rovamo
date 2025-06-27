import CallToAction from "../../../Components/CallToaction";
import BreadCumb from "../../../Components/Common/BreadCumb";
import ProjectDetails from "../../../Components/ProjectDetails/ProjectDetails";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title="Revalio "
				content="Building a Unified MVP for Property and Tax Management"></BreadCumb>
			<ProjectDetails></ProjectDetails>
			<CallToAction/>
		</div>
	);
};

export default page;
