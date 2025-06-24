"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Faq1 = () => {

      const faqContent = [
        {title:'What services does Rovamo provide?', content:'Rovamo specializes in creating modern, responsive websites and web applications. We offer UI/UX design, full-stack development, e-commerce solutions, and custom web application development tailored to your specific business needs and goals.'},
        {title:'Can I update the website content myself?', content:'Absolutely! All websites built by Rovamo include user-friendly content management systems (CMS) that allow you to easily update text, images, add new pages, and make changes without any coding knowledge. We also provide training to ensure youre comfortable managing your site.'},
        {title:"How does Rovamo's web design process work?", content:'Our process begins with a discovery phase to understand your goals, followed by wireframing and design concepts. After your approval, we move to development, testing, and launch. Throughout the entire process, we maintain clear communication and regular updates to ensure your vision is realized.'},
        {title:'How long will my project take to complete?', content:'Project timelines vary based on complexity and scope. A basic website typically takes 4-6 weeks, while more complex projects may take 2-3 months. During our initial consultation, well provide a detailed timeline specific to your project requirements and goals.'},
        {title:'Does Rovamo offer website maintenance and support?', content:'Yes, we offer various maintenance packages to keep your site secure, up-to-date, and performing optimally. Our support includes regular updates, security monitoring, performance optimization, and technical assistance whenever you need help with your website.'},
        {title:'Can Rovamo redesign my existing website?', content:'Definitely! We specialize in website redesigns that improve both aesthetics and functionality. Our team will analyze your current site, identify areas for improvement, and create a modern, effective design that enhances user experience while maintaining your brand identity.'},
      ];

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);

    return (
<section className="agk-faq pt-130 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    
                                    <div className="section-title mb-50 pf_fadeup">
                                        <span className="sub-title">FAQ</span>
                                        <h2>Got Questions? We’ve Got Answers</h2>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                   
                                    <div className="faq-big-text">Faq’s</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    
                                    <div className="agk-image-box mb-50 pf_fadeup">
                                        <div className="agk-image">
                                        <Image src="/assets/images/digital-agency/faq/faq1.jpg" alt="img" width={550} height={555}   />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="agk-content-box mb-30">
                                       
                                        <div className="agk-accordion" id="accordionOne">
                                        {faqContent.map((item, index) => (
                                            <div key={index} className={`agenko-accordion-item mb-20 pf_fadeup ${index === openItemIndex ? "active" : "" }`} >
                                                <div onClick={() => handleItemClick(index)} className="accordion-header">
                                                    <h6  className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true">
                                                    {item.title}
                                                    </h6>
                                                </div>
                                                <div ref={accordionContentRef}  id="collapse1" className="accordion-collapse accordion-content" data-bs-parent="#accordionOne">
                                                    <div className="accordion-content">
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    );
};

export default Faq1;