"use client";

import { CSSProperties, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

function ImageLoading({ src, alt, style }: { src: string; alt: string; style?: CSSProperties }) {

    const [hasLoaded, setHasLoaded] = useState(false);
    
    return (
        <>
            {!hasLoaded && (
                <Spinner animation="grow" />
            )}

            <Card.Img
                src={src}
                alt={alt}
                style={{ ...style, display: hasLoaded ? 'block' : 'none' }}
                onLoad={() => setHasLoaded(true)}
            />
        </>
    );
}

export default ImageLoading;