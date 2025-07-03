import Image from "next/image";
import Link from "next/link";
interface BreadCumbProps {
    Title: string;
    content: string;
    button?:string;
    link?:string;
}
const BreadCumb = ({Title,content,button, link} : BreadCumbProps ) => {

    return (

        <section className="agenko-page-banner">
        <div className="shape shape-circle1"><span></span></div>
        <div className="shape shape-circle2"><span></span></div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-9">
                    
                    <div className="page-content">
                        <h1 className="page-title">{Title}</h1>
                        <div className="row">
                            <div className="col-xl-8">
                                
                                <div className="text-box d-flex align-items-center">
                                    <div className="icon">
                                    <Image className="rotate360" src="/assets/images/pages/shape/star1.png" alt="img" width={84} height={90}   />
                                    </div>
                                    <div className="text">
                                        <p>{content}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                {button && (
                                    <div className="demo-button-wrapper d-flex justify-content-xl-end mt-4 mt-xl-0">
                                        <Link href={link} target="_blank" className="btn-demo">
                                            <span>{button}</span>
                                            <i className="fas fa-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                )}
                               
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>


    );
};

export default BreadCumb;
