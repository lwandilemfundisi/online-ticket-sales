import { Button, Form, InputGroup } from "react-bootstrap";

function SearchTicket(){
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <Form>
                    <InputGroup className="mb-3">                        
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
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