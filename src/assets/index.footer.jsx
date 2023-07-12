import { Container } from "react-bootstrap";
import { BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import data from "./data";

const MyFooter = () => (
  <>
    <Container className="d-flex justify-content-center pt-1">
      <a href={data.MyLink.github} className="mt-2 mx-2 rounded-5 text-light">
        <BsGithub size={25} />
      </a>
      <a href={data.MyLink.instagram} className="mt-2 mx-2 rounded-5 text-light">
        <BsInstagram size={25} />
      </a>
      <a href={data.MyLink.facebook} className="mt-2 mx-2 rounded-5 text-light">
        <BsFacebook size={25} />
      </a>
    </Container>
    <div className="text-center text-white p-2">
      {" "}
      &copy; 2022 Copyright:{" "}
      <a href={data.MyLink.contact} style={{ textDecoration: "none" }}>
        BWX1Y
      </a>
    </div>
  </>
);

export default MyFooter;
