import Image from "next/image";
import logo from "../../assets/svgs/online-tickets-logo.svg";
import headerImageStyles from "./HeaderImage.module.css"


function HeaderImage(){
    return (
        <Image src={logo} className={headerImageStyles.logo} alt="Picture of the author"/>
    );
}

export default HeaderImage;