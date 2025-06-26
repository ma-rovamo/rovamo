import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services4 = () => {

    const serviceContent = [
        {img:'/assets/images/pages/service/card-img1.jpg', title:'AI Consulting', subTitle:'Strategic Implementation', content:'We deliver strategic AI implementation roadmaps, use case identification, and automation workflows that unlock business potential with intelligent solutions.'},
        {img:'/assets/images/pages/service/card-img2.jpg', title:'MVP Development', subTitle:'Rapid Prototyping', content:'We create rapid prototyping and development of minimum viable products that validate concepts and accelerate time-to-market within 48 hours.'},
        {img:'/assets/images/pages/service/card-img3.jpg', title:'Product Design', subTitle:'UI/UX Excellence', content:'We design user-centered experiences that blend beautiful interfaces with intuitive functionality, optimized for conversion and engagement delivery.'},
        {img:'/assets/images/pages/service/card-img4.jpg', title:'Web Development', subTitle:'Full-Stack Solutions', content:'We build full-stack web applications with modern technologies,scalable architecture, and performance-first development practices delivered efficiently.'},
        {img:'/assets/images/pages/service/card-img3.jpg', title:'No-Code Development', subTitle:'Rapid Deployment', content:'We create Bubble applications, Webflow sites, and automation workflows without traditional coding timelines, deployed rapidly for fast results'},
        {img:'/assets/images/pages/service/card-img1.jpg', title:'Requirements Consulting', subTitle:'Strategic Planning', content:'We provide business analysis, scope definition, and strategic roadmaps that align technical capabilities with business objectives effectively'},
      ]; 

    return (
        <section className="agk-services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="section-title mb-60 text-center pf_zoomIn">
                            <span className="sub-title">Our Service</span>
                            <h2>Top Services We Offer</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    {serviceContent.map((item, i) => (
                        <div key={i} className="agenko-card-item style-two mb-10 pf_fadeup">
                            <div className="thumbnail">
                            <Image src={item.img} alt="img" width={320} height={120}   />
                            </div>
                            <div className="card-title">
                                <h2><Link href="/service/service-details">{item.title}</Link></h2>
                                <h4>{item.subTitle}</h4>
                            </div>
                            <div className="content">
                                <p>{item.content}</p>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services4;