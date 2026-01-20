import "server-only";

import { HeaderChildrenModel } from "@/app/interfaces/HeaderChildrenModel";

function Header({HeaderIcon, HeaderNav, HeaderActionPanel} : HeaderChildrenModel){
    return (
        <div className="row site-header">
            <div className="col-4 d-flex align-items-center justify-content-center">
                {HeaderIcon}
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
                {HeaderNav}
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
                {HeaderActionPanel}
            </div>
        </div>
    );
}

export default Header;