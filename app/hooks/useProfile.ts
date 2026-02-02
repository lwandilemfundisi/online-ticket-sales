import { useCallback, useEffect, useState } from "react";
import useGetReq from "@/hooks/useGetReq";
import { Claim } from "@/interfaces/Claims";

const useProfile = ()=> {

    const {get, loadingState} = useGetReq("/account/user?slide=false");

    const [claims, setClaims] = useState<Claim[] | null>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        const getUserClaims = async () => {
            const claims = await get();
            setClaims(claims);

            if(claims && claims.length > 0)
                setIsAuthenticated(true);
        };

        getUserClaims();
    }, [get]);

    const login = useCallback(
        () => window.location.replace("/account/login"), []
    );

    const logout = useCallback(
        () => {
            const logoutUrl = claims?.find((claim: Claim) => claim.type === "bff:logout_url")?.value;
            console.log("Logout URL:", logoutUrl);
            window.location.replace(logoutUrl || "/account/logout");
        }, [claims]
    );

    const getNameClaim = useCallback(
        () => claims?.find((claim: Claim) => claim.type === "name")?.value,
        [claims]
    );

    return {
        claims,
        loadingState,
        isAuthenticated,
        getNameClaim,
        login,
        logout
    }
};

export default useProfile;