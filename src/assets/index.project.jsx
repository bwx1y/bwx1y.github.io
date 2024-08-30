import { Container, Row, Col, Card } from "react-bootstrap";
import data from "./data";

const Project = () => {
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col className="d-block">
          <h1 className={`text-center text-light ${data.ProjectList.length !== 0 && "mb-5"}`}>Project</h1>
          {data.ProjectList.length === 0 && <h3 className="text-center text-light">Sorry i`am dont have project</h3>}
          {data.ProjectList.length !== 0 && (
            <Row>
              {data.ProjectList.map((item, index) => (
                <Col md="4" key={index}>
                  <Card text="white" bg="secondary" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.photo} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <a className="btn btn-outline-primary" href={item.url}>Go somewhere</a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
