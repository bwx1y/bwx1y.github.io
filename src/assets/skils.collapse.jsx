import { useState } from "react";
import { Card, Collapse, Button, Col } from "react-bootstrap";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const MySkilsCollapse = (data) => {
  const [open, setOpen] = useState(false);

  return (
    <Col lg="12">
      <Card bg="dark" text="white" className="my-3">
        {window.innerWidth < 720 ? (
          <>
            <Card.Header>
              <h5>
                <img src={data.icon} alt="no icon" width={25} height={25} className="mx-1" />
                About My {data.title} Language
              </h5>
            </Card.Header>
            <Card.Body className="mx-1" id="text-collapse">
              <span>{data.about}</span>
            </Card.Body>
          </>
        ) : (
          <>
            <Card.Header className="d-flex justify-content-between">
              <h4>
                <img src={data.icon} alt="no icon" width={50} height={50} className="mx-3" />
                About My {data.title} Language
              </h4>
              <Button onClick={() => setOpen(!open)} aria-controls="text-collapse" aria-expanded={open}>
                {open === true ? <AiOutlineArrowUp size={25} /> : <AiOutlineArrowDown size={25} />}
              </Button>
            </Card.Header>
            <Collapse in={open} dimension="height">
              <Card.Body className="mx-5" id="text-collapse">
                <span>{data.about}</span>
              </Card.Body>
            </Collapse>
          </>
        )}
      </Card>
    </Col>
  );
};

export default MySkilsCollapse;
