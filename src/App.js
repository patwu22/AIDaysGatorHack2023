import { Container, Stack, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Categories from "./Categories";
import CategoriesStack from "./CategoriesStack";

function App() {
  return (
      <Container>
        <div className="m-3"></div>
        <Row>
          <Col></Col>
          <Col xs={8} className="bg-light border">
            <h1 className="header text-center m-4">Product Randomizer Navigator</h1>
            <CategoriesStack className="m-3 d-flex justify-content-center" direction="horizontal" gap={2}>
              {/* <Categories name="category1"></Categories>
              <Categories name="category2"></Categories>
              <Categories name="category3"></Categories>
              <Categories name="category4"></Categories>
              <Categories name="category5"></Categories> */}
            </CategoriesStack>
          </Col>
          <Col></Col>
        </Row>
      </Container>
  );
}

export default App;
