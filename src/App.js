import { Container, Stack, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";

import CategoriesStack from "./CategoriesStack";

function App() {
    useEffect(() => {
        async function OpenaiPrompt() {
            const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    prompt: "Generate the names of three broad categories of goods or services. They should be broad enough to contain three subcategories. In your response, only provide the name of each broad category, separated by comma.No formatting.",
                    model: 'text-davinci-002',
                    max_tokens: 50,
                    n: 1,
                    stop: ".",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                    }
                }
            );
            console.log(response);
        }

        OpenaiPrompt();
    }, []);

  return (
      <Container>
        <div className="m-3"></div>
        <Row>
          <Col></Col>
          <Col xs={8} className="bg-light border">
            <h1 className="header text-center m-4">Product Randomizer Navigator</h1>
            <CategoriesStack></CategoriesStack>
          </Col>
          <Col></Col>
        </Row>
      </Container>
  );
}

export default App;
