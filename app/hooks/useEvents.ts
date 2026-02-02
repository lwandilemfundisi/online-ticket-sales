import { EventType } from "@/interfaces/EventType";
import { useEffect, useState } from "react";
import useGetReq from "@/hooks/useGetReq";

const useEvents = () => {
    const {get, loadingState} = useGetReq("/event/getevents");
    const [events, setEvents] = useState<EventType[]>([]);

    useEffect(() => {
        const getEvents = async () => {
            const data = await get();
            setEvents(data.events);
        };
        getEvents();
    }, [get]);

    return{
        events,
        loadingState
    }
}

export default useEvents;