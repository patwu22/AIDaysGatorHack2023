import { Container, Stack, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Categories from "./Categories";

function App() {
  return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <h1 className="header">Product Randomizer Navigator</h1>
            <Stack direction="horizontal" gap={2}>
              <Categories name="category1"></Categories>
              <Categories name="category2"></Categories>
              <Categories name="category3"></Categories>
              <Categories name="category4"></Categories>
              <Categories name="category5"></Categories>
            </Stack>
          </Col>
          <Col></Col>
        </Row>
      </Container>
  );
}

export default App;
