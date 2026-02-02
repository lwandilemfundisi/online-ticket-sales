"use client";

import SearchTicket from "@/components/search-ticket/SearchTicket";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import useEvents from "@/hooks/useEvents";

function Events(){
    
    const {events} = useEvents();

    return (
        <Container>
            <SearchTicket />
            <Row xs={1} md={3} className="g-4 padding-top-3x">
                {events.map((event) => (
                    <Col key={event.id}>
                        <Card>
                            <Card.Img variant="top" src={event.imageUrl} />
                            <Card.Body>
                                <Card.Title>{event.eventName}</Card.Title>
                                <Card.Text>
                                    {event.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Events;