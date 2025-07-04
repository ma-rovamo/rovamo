import React from 'react';

const Brand4 = () => {

    const brandContent = [
        {name: 'Vodafone'},
        {name: 'Real Chemistry'},
        {name: 'Capita'},
        {name: 'Novartis'},
        {name: 'Rhenus'},
      ];

    return (
        <section className="agenko-company pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="section-title text-center mb-40 pf_zoomIn">
                            <span className="sub-title">Our Clients</span>
                            <h2>Trusted Industry Leaders</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="company-list d-flex flex-wrap justify-content-center">
                        {brandContent.map((item, i) => (
                            <div key={i} className="agenko-client-item style-two mb-40 pf_fadeup">
                                <div className="client-image text-white">
                                    <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{item.name}</span>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand4;
