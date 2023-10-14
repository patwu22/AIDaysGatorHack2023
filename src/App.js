import { Button, Container, Stack, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <h1 className="header">Product Randomizer Navigator</h1>
            <Stack direction="horizontal" gap={2}>
              <Button as="a" variant="primary">
                Category 1
              </Button>
              <Button as="a" variant="primary">
                Category 2
              </Button>
              <Button as="a" variant="primary">
                Category 3
              </Button>
              <Button as="a" variant="primary">
                Category 4
              </Button>
              <Button as="a" variant="primary">
                Category 5
              </Button>
            </Stack>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
