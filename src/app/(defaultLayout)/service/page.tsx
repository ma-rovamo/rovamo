import Blog3 from "../../Components/Blog/Blog3";
import Brand4 from "../../Components/Brand/Brand4";
import CallToAction from "../../Components/CallToaction";
import BreadCumb from "../../Components/Common/BreadCumb";
import Services4 from "../../Components/Services/Services4";
import WhyChoose1 from "../../Components/WhyChoose/WhyChoose1";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title="Services"
				content="From AI strategy to full-stack development - comprehensive solutions that scale your business"></BreadCumb>
			<WhyChoose1></WhyChoose1>
			<Services4></Services4>
			<Brand4></Brand4>
			<CallToAction/>
			{/* <Blog3 paddingTop="agenko-blog pb-80"></Blog3> */}
		</div>
	);
};

export default page;
