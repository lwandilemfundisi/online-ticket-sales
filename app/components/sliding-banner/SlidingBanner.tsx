'use client'

import Image from "next/image";
import img1 from "../../assets/jpgs/panel_Asher.jpg";
import img2 from "../../assets/jpgs/panel_Freshlyground.jpg";
import img3 from "../../assets/jpgs/panel_Rhebokskloof.jpg";
import img4 from "../../assets/jpgs/panel_TheCelebration.jpg";
import { Carousel } from "react-bootstrap";

function SlidingBanner(){
    return (
        <div className="container">
            <Carousel className="carousel-dark">
                <Carousel.Item>
                    <Image src={img1} className="d-block w-100" alt="..." width={500} height={500} />
                    <Carousel.Caption className="d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img2} className="d-block w-100" alt="..." width={500} height={500}/>
                    <Carousel.Caption className="d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img3} className="d-block w-100" alt="..." width={500} height={500}/>
                    <Carousel.Caption className="d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img4} className="d-block w-100" alt="..." width={500} height={500}/>
                    <Carousel.Caption className="d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default SlidingBanner;