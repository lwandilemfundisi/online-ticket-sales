"use client"

import useProfile from "@/hooks/useProfile";

function Profile(){

    const {login, logout, isAuthenticated, getNameClaim} = useProfile();

    return (
        <>
            {
                isAuthenticated ?
                <div className="input-group d-flex align-items-center justify-content-center">
                    <span className="input-group-text"><i className="fa fa-user pe-4"></i>{getNameClaim()}</span>
                    <span className="input-group-text" onClick={logout}>SIGN OUT</span>
                </div>
                :
                <div className="input-group d-flex align-items-center justify-content-center">
                    <span className="input-group-text" onClick={login}><i className="fa fa-user pe-4"></i>SIGN IN</span>
                </div>
            }
        </>
    );
}

export default Profile;