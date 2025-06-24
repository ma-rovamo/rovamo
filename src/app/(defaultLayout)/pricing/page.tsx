import Brand4 from "../../Components/Brand/Brand4";
import BreadCumb from "../../Components/Common/BreadCumb";
import Pricing2 from "../../Components/Pricing/Pricing2";
import Testimonial2 from "../../Components/Testimonial/Testimonial2";
import Testimonial4 from "../../Components/Testimonial/Testimonial4";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title="Pricing"
				content="Transparent pricing for AI-powered solutions that deliver results in days, not months"></BreadCumb>
			<Pricing2></Pricing2>
			<Testimonial2></Testimonial2>
			<Brand4></Brand4>
		</div>
	);
};

export default page;
