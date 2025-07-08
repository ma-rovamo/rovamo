import CallToAction from "../../../Components/CallToaction";
import BreadCumb from "../../../Components/Common/BreadCumb";
import ProjectDetails from "../../../Components/ProjectDetails/ProjectDetails";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title=" Revalio - Property Tax Management Platform "
				button="View Demo"
				link="https://revalio.hellorovamo.com/"
				content="A unified web platform that streamlines property tax appeals and
valuations with automated workflows, e-signatures, and client communication tools."></BreadCumb>
			<ProjectDetails></ProjectDetails>
			<CallToAction />
		</div>
	);
};

export default page;
// Title = "Revalio - Digital Property Tax Management ";
