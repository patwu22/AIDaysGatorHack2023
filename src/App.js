import { Container, Stack, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< HEAD
=======
import Categories from "./Categories";
>>>>>>> 7a7d3e7fbe1adde67752cfed75e50550d661377e

function App() {
  return (
<<<<<<< HEAD
      <>
    <NavBar></NavBar>
      <Container className="p-3">
        <h1 className="header">Product Randomizer Navigator</h1>
              <Button>click me!!!</Button>
          </Container>
    </>
=======
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6} className="bg-light border">
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
>>>>>>> 7a7d3e7fbe1adde67752cfed75e50550d661377e
  );
}

export default App;
