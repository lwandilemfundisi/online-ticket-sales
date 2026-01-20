'use client'

import Image from "next/image";
import img1 from "../../assets/jpgs/panel_Asher.jpg";
import img2 from "../../assets/jpgs/panel_Freshlyground.jpg";
import img3 from "../../assets/jpgs/panel_Rhebokskloof.jpg";
import img4 from "../../assets/jpgs/panel_TheCelebration.jpg";
import { Carousel } from "react-bootstrap";

function SlidingBanner(){
    return (
        <div className="container  padding-bottom-3x">
            <h2 className="mb-2 pt-4"><i className="fas fa-star text-primary">&nbsp;</i>Featured Events</h2>
            <Carousel className="carousel-dark">
                <Carousel.Item>
                    <Image src={img1} className="d-block w-100" alt="..." width={300} height={300} />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img2} className="d-block w-100" alt="..." width={300} height={300}/>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img3} className="d-block w-100" alt="..." width={300} height={300}/>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img4} className="d-block w-100" alt="..." width={300} height={300}/>
                    
                </Carousel.Item>
            </Carousel>
            <div className="text-center pt-4"><a className="btn btn-primary" href="category.aspx?itemid=1184162&amp;location=9&amp;when=anytime">See More</a></div>
        </div>
    );
}

export default SlidingBanner;