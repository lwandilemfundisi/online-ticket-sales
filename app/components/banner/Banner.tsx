import { ElementType } from "react";

interface BannerProps{
    ApplyBackgound: boolean;
    AnotherComponent: ElementType;
}

const Banner: React.FC<BannerProps> = ({AnotherComponent, ApplyBackgound}) => {
    return(
        <section className="fw-section padding-top-3x padding-bottom-5x">
            <div className={`bg-angle bg-inset-shadow-both ${ApplyBackgound ? 'bg-pattern' : '' } `}></div>
            <div className="container">
                <AnotherComponent/>
            </div>
      </section>
    );
};

export default Banner;