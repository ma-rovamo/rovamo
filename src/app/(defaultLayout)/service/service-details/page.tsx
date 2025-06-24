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
				Title="Services Details"
				content="Complete AI-powered solutions delivered in days with proven methodologies and guaranteed results"></BreadCumb>
			<ServiceDetails></ServiceDetails>
			<Process3></Process3>
			<Pricing1></Pricing1>
			<Brand4></Brand4>
		</div>
	);
};

export default page;
