import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesStack from "./CategoriesStack";

function App() {
  return (
      <Container>
        <div className="m-3"></div>
        <Row>
          <Col></Col>
          <Col xs={8} className="bg-light border">
            <h1 className="header text-center m-4">Product Randomizer Navigator</h1>
            <CategoriesStack/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
  );
}

export default App;
