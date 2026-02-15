"use client"

import useProfile from "@/hooks/useProfile";
import { NavDropdown } from "react-bootstrap";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {

    const { login, logout, isAuthenticated, getNameClaim } = useProfile();

    const signInTitle = (<span>
        <FontAwesomeIcon icon={faUser} className="pe-4" />
    </span>)

    return (
        <>
            {
                isAuthenticated ?
                    <div className="input-group d-flex align-items-center justify-content-center">
                        <NavDropdown title={getNameClaim()} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={logout}>SIGN OUT</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    :
                    <div className="input-group d-flex align-items-center justify-content-center">
                        <NavDropdown title={signInTitle} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={login}>SIGN IN</NavDropdown.Item>
                        </NavDropdown>
                    </div>
            }
        </>
    );
}

export default Profile;