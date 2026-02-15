"use client"

import useProfile from "@/hooks/useProfile";
import { NavDropdown, Spinner } from "react-bootstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loadingStatus from "@/helpers/loadingStatus";

function Profile() {

    const { login, logout, isAuthenticated, getNameClaim, loadingState } = useProfile();

    const signIntitle = (
        <span className="border border-primary rounded-circle p-2 bg-light text-primary">
            <FontAwesomeIcon icon={faUser} />
        </span>
    );

    const signOutTitle = (
        <span className="d-flex align-items-center">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            {getNameClaim()}
        </span>
    );

    if (loadingState === loadingStatus.isLoading) {
        return (
            <Spinner animation="grow" variant="primary"/>
        );
    }

    return (
        <>
            {
                isAuthenticated ?
                    <div className="input-group d-flex align-items-center justify-content-center">
                        <NavDropdown title={signOutTitle} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={logout}>SIGN OUT</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    :
                    <div className="input-group d-flex align-items-center justify-content-center">
                        <NavDropdown title={signIntitle} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={login}>SIGN IN</NavDropdown.Item>
                        </NavDropdown>
                    </div>
            }
        </>
    );
}

export default Profile;