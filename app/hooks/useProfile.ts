import { useCallback, useEffect, useState } from "react";
import useGetReq from "@/hooks/useGetReq";
import { Claim } from "@/interfaces/Claims";

const useProfile = ()=> {

    const {get, loadingState} = useGetReq("bff/auth/user?slide=false");

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
        () => window.location.replace("bff/auth/login"), []
    );

    const logout = useCallback(
        () => window.location.replace("bff/auth/logout"), []
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