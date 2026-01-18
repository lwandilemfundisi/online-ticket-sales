import { Button, Form, InputGroup } from "react-bootstrap";

function SearchTicket(){
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <Form className="text-center">
                    <h1>LIVE MORE</h1>
                    <h3 className="mb-5">Find the fun you are looking for...</h3>
                    <InputGroup className="mb-3">                        
                        <Form.Control
                            placeholder="search for any event"
                            aria-label="event name"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            <i className="fa fa-search"></i>
                        </Button>
                    </InputGroup>
                </Form>
            </div>
            <div className="col-3"></div>
      </div>
    );
}

export default SearchTicket;