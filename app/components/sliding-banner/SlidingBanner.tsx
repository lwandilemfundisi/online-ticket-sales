'use client'

import Image from "next/image";
import logo from "../../assets/svgs/online-tickets-logo.svg";
import { Carousel } from "react-bootstrap";

function SlidingBanner(){
    return (
        <Carousel className="carousel-dark">
            <Carousel.Item>
                <Image src={logo} className="d-block w-100" alt="..." width={500} height={500} />
                <Carousel.Caption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={logo} className="d-block w-100" alt="..." width={500} height={500}/>
                <Carousel.Caption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={logo} className="d-block w-100" alt="..." width={500} height={500}/>
                <Carousel.Caption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={logo} className="d-block w-100" alt="..." width={500} height={500}/>
                <Carousel.Caption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlidingBanner;