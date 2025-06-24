import BreadCumb from "../../Components/Common/BreadCumb";
import Contact from "../../Components/Contact/Contact";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title="Contact"
				content="Ready to transform your ideas with AI-powered innovation? Let's accelerate your next breakthrough project"></BreadCumb>
			<Contact></Contact>
		</div>
	);
};

export default page;
