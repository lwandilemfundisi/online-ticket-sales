import SearchTicket from "@/components/search-ticket/SearchTicket";
import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";

function EventsLoading() {
    return (
        <Container>
            <SearchTicket />
            <Row xs={1} md={3} className="g-4 padding-top-2x">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Col key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Placeholder as={Card.Title} animation="glow">
                                    <Placeholder xs={6} />
                                </Placeholder>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                </Placeholder>
                                <Placeholder.Button variant="primary" xs={6} />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default EventsLoading;