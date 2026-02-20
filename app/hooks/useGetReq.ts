import loadingStatus from "@/helpers/loadingStatus";
import { useCallback, useState } from "react";

const useGetReq = (url: string) => {
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    const get = useCallback(async () => {
        setLoadingState(loadingStatus.isLoading);
        try {
            const rsp = await fetch(url, { credentials: "include", headers: { "X-CSRF": "1"} });
            const result = await rsp.json();
            setLoadingState(loadingStatus.loaded);
            return result;
        } catch {
            setLoadingState(loadingStatus.hasErrored);
        }
    }, [url]);

    return { get, loadingState }
}

export default useGetReq;