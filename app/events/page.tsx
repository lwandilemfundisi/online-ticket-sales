"use client";

import SearchTicket from "@/components/search-ticket/SearchTicket";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import useEvents from "@/hooks/useEvents";
import { CSSProperties } from "react";
import EventsLoading from "@/components/events-loading/EventsLoading";
import loadingStatus from "@/helpers/loadingStatus";
import ImageLoading from "@/components/image-loading/ImageLoading";

const cardImage: CSSProperties = {
    minHeight: '265px', maxHeight: '265px', objectFit: 'cover'
};

const cardBody: CSSProperties = {
    minHeight: '150px', maxHeight: '150px'
};

function Events() {

    const { events, loadingState } = useEvents();

    if (loadingState === loadingStatus.isLoading) {
        return (
            <EventsLoading />
        );
    }

    if (loadingState === loadingStatus.hasErrored) {
        return (
            <EventsLoading />
        );
    }

    return (
        <Container>
            <SearchTicket />
            {
                loadingState === loadingStatus.isLoading && (
                    <EventsLoading />
                )
                ||
                loadingState === loadingStatus.hasErrored && (
                    <EventsLoading />
                )
                ||
                loadingState === loadingStatus.loaded && events.length > 0 && (
                    <Row xs={1} md={3} className="g-4 padding-top-2x">
                    {events.map((event) => (
                        <Col key={event.id}>
                            <Card>
                                <ImageLoading src={event.imageUrl} alt={event.eventName} style={cardImage} />
                                <Card.Body style={cardBody}>
                                    <Card.Title>{event.eventName}</Card.Title>
                                    <Card.Text>
                                        {event.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                )
            }
        </Container>
    );
}

export default Events;