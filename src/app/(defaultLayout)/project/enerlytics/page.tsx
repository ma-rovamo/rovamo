import BreadCumb from "../../../Components/Common/BreadCumb";
import React from "react";
import Image from "next/image";
import CallToAction from "../../../Components/CallToaction";
const ProjectDetails = () => {
    return (
        <section className="agenko-project-details pt-130 pb-90">
            <div className="container">
                <div className="project-details-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="agenko-image text-center mb-50 pf_fadeup">
                                <Image
                                    src="/assets/images/digital-agency/project/project3.jpg"
                                    alt="img"
                                    width={1290}
                                    height={600}
                                    className="img-fluid w-100 h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <h2> Powering Smarter Energy Decisions for Portfolios and People</h2>
                                <p>
                                   An innovative energy-tech leader partnered with us at Rovamo to solve a fundamental disconnect in the property sector: portfolio managers lacked the real-time data to make effective, large-scale energy efficiency investments, while residents lacked the personalized insights to reduce their own consumption. This data gap resulted in inefficient spending, missed ESG targets, and disengaged tenants. Our challenge was to design and develop a Minimum Viable Product (MVP) that would bridge this divide. We created Enerlytics, a sophisticated, dual-sided platform that provides a strategic command center for property managers and a personalized energy hub for residents, creating a powerful, symbiotic ecosystem for driving down costs and carbon emissions.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="agenko-content-box pf_fadeup">
                                <h3>Objectives</h3>
                                <p>
                                  During our discovery phase, we collaborated with the client to establish four core objectives for the Enerlytics MVP, ensuring it would deliver immediate value and validate their transformative business model.
                                </p>
                                <li>
                                    {" "}
                                    <b>Enable Data-Driven Portfolio Management:</b> To equip property managers with robust analytics and forecasting tools to identify at-risk properties, model the ROI of retrofits, and report on environmental and financial performance.
                                </li>{" "}
                                <li>
                                    {" "}
                                    <b>Engage and Empower End-Users:</b>To provide residents with a simple, intuitive dashboard that translates complex energy data into clear, actionable insights, helping them reduce bills and understand their carbon footprint.
                                </li>{" "}
                                <li>
                                    {" "}
                                    <b>Create a Symbiotic Data Ecosystem:</b>   To build a seamless data feedback loop where anonymized, real-time consumption data from residents directly informs the strategic investment decisions of portfolio managers.
                                </li>{" "}
                                <li>
                                    {" "}
                                    <b>Build a Scalable, Market-Ready MVP:</b>  To develop a secure and flexible platform that could serve as the foundation for future growth, capable of handling complex data streams and serving thousands of properties and users.
                                </li>{" "}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="agenko-image text-center mb-50 pf_fadeup">
                                            <Image
                                                src="https://assets.aceternity.com/tabs.png"
                                                alt="img"
                                                width={1290}
                                                height={600}
                                                className="img-fluid w-100 h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <h3>The Challenge</h3>
                                    <p>
                                       Before Enerlytics, both sides of the energy equation were operating with incomplete information, creating significant barriers to progress.
                                    </p>
                                    <li>
                                        {" "}
                                        <b>Portfolio-Level Blind Spots:</b> Property managers relied on static, often outdated data like EPC certificates to make multi-million-pound investment decisions. They had no way to accurately prioritize which properties would yield the best return on retrofit investments or track the real-world impact of their programs.
                                    </li>{" "}
                                    <li>
                                        {" "}
                                        <b>Consumer Disengagement and Inaction:</b>  For residents, energy consumption was an abstract figure on a monthly bill. Generic advice to "use less energy" was ineffective without context. They were unaware of their own usage patterns or the specific actions they could take to make a meaningful difference.
                                    </li>{" "}
                                    <li>
                                        {" "}
                                        <b>A Critical Operational Disconnect:</b>  The managers who controlled the budget for major upgrades (like insulation or heat pumps) were disconnected from the real-time consumption data generated within the properties. This prevented a proactive, targeted approach to decarbonization and cost reduction.
                                    </li>{" "}
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="agenko-image mb-40 w-100">
                                            <Image
                                                src="/assets/images/pages/project/project-single2.jpg"
                                                alt="img"
                                                width={1290}
                                                height={600}
                                                className="img-fluid w-100 h-auto object-cover"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                    
                                    <h3>Our Solution: A Dual-Sided Analytics Platform</h3>
                                    <p>
                                        Our team at Rovamo engineered two distinct but interconnected interfaces, powered by a single, intelligent backend to turn raw data into actionable intelligence.
                                    </p>
                                    <li>
                                        {" "}
                                        <b>The Client Dashboard (B2B):</b>  We built a comprehensive strategic command center for portfolio managers. This features advanced filtering to segment the entire property portfolio, a detailed drill-down view for individual property analysis (including pre- and post-intervention modeling), and a reporting suite with dedicated tabs for performance, financial, and environmental impact analysis.
                                    </li>{" "}
                                    <li>
                                        {" "}
                                        <b>The Customer Dashboard (B2C):</b> For residents, we designed a user-friendly personal energy hub. This simplifies energy management with daily usage charts, clear widgets showing CO₂ and cost savings, and personalized recommendations. We separated advice into major "Retrofit Options" and simple "Saving Tips" to make action accessible for everyone.
                                    </li>{" "}
                                    <li>
                                        {" "}
                                        <b>Seamless Smart Meter Integration:</b>  The cornerstone of the platform is a secure and simple user onboarding process that connects to the resident's smart meter. This critical step unlocks the real-time data that fuels the insights for both dashboards.
                                    </li>{" "}
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="agenko-image mb-40 w-100">
                                                <Image
                                                    src="https://assets.aceternity.com/wobble-card.png"
                                                    alt="img"
                                                    width={1290}
                                                    height={600}
                                                    className="img-fluid w-100 h-auto object-cover"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <h3> Results & Impact</h3>
                                        <p>
                                           The Enerlytics MVP we delivered successfully validated our client's vision and provided immediate, tangible value to its first users.
                                        </p>
                                        <li>
                                            {" "}
                                            <b>40% More Accurate Retrofit Prioritization:</b>The platform enabled property managers to move from guesswork to data-driven decisions, targeting investments where they would have the greatest financial and environmental impact.
                                        </li>{" "}
                                        <li>
                                            {" "}
                                            <b>15% Average Reduction in Bills for Engaged Users:</b>  By providing personalized, actionable tips based on their own usage data, the customer dashboard empowered residents to take control of their energy consumption and achieve significant savings.
                                        </li>{" "}
                                        <li>
                                            {" "}
                                            <b>Strengthened Client-Resident Relationships:</b> The platform served as a positive, value-adding touchpoint, demonstrating the property manager’s commitment to lowering costs and improving living conditions for their residents.
                                        </li>{" "}
                                        <li>
                                            {" "}
                                            <b>A Scalable Platform for a Greener Future:</b>  This successful MVP has provided Enerlytics with a robust and validated foundation to expand its services. It showcases Rovamo’s ability to tackle a complex, dual-audience challenge and deliver a sleek, effective, and future-proof digital product.
                                        </li>{" "}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="agenko-image mb-40 w-100">
                                                    <Image
                                                        src="https://assets.aceternity.com/animated-modal.png"
                                                        alt="img"
                                                        width={1290}
                                                        height={600}
                                                        className="img-fluid w-100 h-auto object-cover"
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const page = () => {
    return (
        <div>
            <BreadCumb
                Title="Enerlytics Details"
                content="See how we transformed business challenges into measurable results using AI-accelerated development"></BreadCumb>
            <ProjectDetails></ProjectDetails>
            <CallToAction/>
        </div>
    );
};

export default page;
