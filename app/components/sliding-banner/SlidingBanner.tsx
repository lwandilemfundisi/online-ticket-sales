'use client'

import Image from "next/image";
import img1 from "../../assets/jpgs/panel_Asher.jpg";
import img2 from "../../assets/jpgs/panel_Freshlyground.jpg";
import img3 from "../../assets/jpgs/panel_Rhebokskloof.jpg";
import img4 from "../../assets/jpgs/panel_TheCelebration.jpg";
import { Carousel } from "react-bootstrap";

const style = {
    height: "200px",
}

function SlidingBanner(){
    return (
        <div className="row  padding-bottom-3x">
            <div className="col-3"></div>
            <div className="col-6 text-center">
                <h2 className="mb-2 pt-4"><i className="fas fa-star text-primary">&nbsp;</i>Featured Events</h2>
                <Carousel className="carousel-dark" controls={false} indicators={true}>
                    <Carousel.Item>
                        <Image src={img1} className="d-block w-100" alt="..." />
                        <div className="card border-0">
                            <div className="card-body" style={style}>
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card border-0">
                            <Image src={img2} className="d-block w-100" alt="..." />
                            <div className="card-body" style={style}>
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card border-0">
                            <Image src={img3} className="d-block w-100" alt="..." />
                            <div className="card-body" style={style}>
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card border-0">
                            <Image src={img4} className="d-block w-100" alt="..." />
                            <div className="card-body" style={style}>
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="col-3"></div>
            
            
            <div className="text-center pt-4"><a className="btn btn-primary" href="category.aspx?itemid=1184162&amp;location=9&amp;when=anytime">See More</a></div>
        </div>
    );
}

export default SlidingBanner;