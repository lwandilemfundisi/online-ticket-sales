export interface EventType {
    id: string;
    eventName: string;
    eventPrice: number;
    artist: string;
    date: string;
    description: string;
    imageUrl: string;
    eventCategoryId: string;
    show: boolean;
}

export interface EventTypes{
    events: EventType[];
}