import { Container, Row } from "react-bootstrap";
import MySkilsCollapse from "./skils.collapse";
import data from "./data";

const Skills = () => {
  return (
    <Container>
      <Row>
        <h1 className="text-center text-white mb-3">Skills</h1>
        {data.skils.map((res) => {
          return <MySkilsCollapse icon={res.icon} title={res.title} about={res.about} />;
        })}
      </Row>
    </Container>
  );
};

export default Skills;
