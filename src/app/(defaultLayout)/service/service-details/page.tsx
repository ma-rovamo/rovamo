import Brand4 from "../../../Components/Brand/Brand4";
import CallToAction from "../../../Components/CallToaction";
import BreadCumb from "../../../Components/Common/BreadCumb";
import Pricing1 from "../../../Components/Pricing/Pricing1";
import Process3 from "../../../Components/Process/Process3";
import ServiceDetails from "../../../Components/ServiceDetails/ServiceDetails";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title="AI CONSULTING   "
				content="We create a strategic roadmap for your vision, defining the optimal AI models, data requirements, and core features to ensure your product is technically feasible, market-ready, and primed for rapid development."></BreadCumb>
			<ServiceDetails></ServiceDetails>
			<Process3></Process3>
			<Pricing1></Pricing1>
			<Brand4></Brand4>
			<CallToAction/>
		</div>
	);
};

export default page;
