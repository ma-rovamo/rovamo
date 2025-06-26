import Brand4 from "../../../Components/Brand/Brand4";
import BreadCumb from "../../../Components/Common/BreadCumb";
import Pricing1 from "../../../Components/Pricing/Pricing1";
import Process3 from "../../../Components/Process/Process3";
import ServiceDetails from "../../../Components/ServiceDetails/ServiceDetails";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title="AI Consulting "
				content="Strategic AI implementation and automation workflows that transform operations and drive measurable business results"></BreadCumb>
			<ServiceDetails></ServiceDetails>
			<Process3></Process3>
			<Pricing1></Pricing1>
			<Brand4></Brand4>
		</div>
	);
};

export default page;
