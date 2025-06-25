import About1 from "../../Components/About/About1";
import Brand4 from "../../Components/Brand/Brand4";
import CallToAction from "../../Components/CallToaction";
import BreadCumb from "../../Components/Common/BreadCumb";
import Team1 from "../../Components/Team/Team1";
import TeamDetails from "../../Components/TeamDetails/TeamDetails";
import Testimonial2 from "../../Components/Testimonial/Testimonial2";
import Testimonial4 from "../../Components/Testimonial/Testimonial4";
import WhoWeAre2 from "../../Components/WhoWeAre/WhoWeAre2";
import React from "react";

const page = () => {
	return (
		<div>
			<BreadCumb
				Title="About Us"
				content="Rovamo empowers businesses with AI-powered innovation, rapid MVP development, and intelligent digital solutions for tomorrow's challenges."></BreadCumb>
			<About1></About1>
			<WhoWeAre2></WhoWeAre2>
			<TeamDetails></TeamDetails>
			<Brand4></Brand4>
			<Testimonial2></Testimonial2>
            <CallToAction/>

		</div>
	);
};

export default page;
