import { Stack, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Categories from "./Categories";

function CategoriesStack() {
    const [stage, setstage] = useState(1);
    const [name, setname] = useState('');
    const [items, setitems] = useState('');
    const [c1, setc1] = useState('');
    const [c2, setc2] = useState('');
    const [c3, setc3] = useState('');
    const [c4, setc4] = useState('');
    const [c5, setc5] = useState('');


    useEffect(() => {
        async function OpenaiPrompt() {
            const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    prompt: 'Generate the names of five broad categories of goods or services.They should be broad enough to contain three subcategories.Each item should have its first letter capitalized.In your response, only provide the name of each broad category, separated by comma.Do not include any words other than the categories.Example: “Food, Arts and Crafts Materials, Tech Gadgets”',
                    model: 'text-davinci-002',
                    max_tokens: 50,
                    temperature: 0.5,
                    n: 1,
                    stop: "."
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                    }
                }
            );
            const cate = response.data.choices[0].text.split(',');
            setc1(cate[0]);
            setc2(cate[1]);
            setc3(cate[2]);
            setc4(cate[3]);
            setc5(cate[4]);
        }
        
        async function OpenaiPrompt2() {
            const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    prompt: `Generate the names of five subcategories of ${name}. Each item should have its first letter capitalized.In your response, only provide the name of each broad category, separated by comma.Do not include any words other than the categories.Example: “Food, Arts and Crafts Materials, Tech Gadgets”`,
                    model: 'text-davinci-003',
                    max_tokens: 50,
                    temperature: 0.5,
                    n: 1,
                    stop: "."
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                    }
                }
            );
            const cate = response.data.choices[0].text.split(',');
            setc1(cate[0]);
            setc2(cate[1]);
            setc3(cate[2]);
            setc4(cate[3]);
            setc5(cate[4]);

        }

        async function OpenaiPrompt3() {
             const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    prompt: `Generate fake product names and prices (in USD) for ${name}. The names should sound like they would appear on an online shopping website. Each item and price pair should be separated by a semicolon. The format should be “[name] - [cost];”. For example: “Sparkling Berry Fusion - $3.99; Premium Green Tea Elixir - $2.49”;`,
                    model: 'text-davinci-003',
                    max_tokens: 1000,
                    temperature: 0.5,
                    n: 1
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                    }
                }
            );
            setitems(response.data.choices[0].text);
        }
        if (stage === 1) {
            OpenaiPrompt();
        }
        else if (stage === 2) {
            OpenaiPrompt2();
        }
        else if (stage === 3) {
            OpenaiPrompt3();
        }
    }, [stage, name]);


    return (
        <div>
          <Stack
            className="m-3 d-flex justify-content-center"
            direction="horizontal"
            gap={2}
          >
            <Categories name={c1} stage={stage} setstage={setstage} setname={setname} />
            <Categories name={c2} stage={stage} setstage={setstage} setname={setname} />
            <Categories name={c3} stage={stage} setstage={setstage} setname={setname} />
            <Categories name={c4} stage={stage} setstage={setstage} setname={setname} />
            <Categories name={c5} stage={stage} setstage={setstage} setname={setname} />

            </Stack>
            <div className="text-center">
                <h4>Items List</h4>
                <Card><Card.Body>
                    {items.slice(0, -1).split(';').map((item, index) => (<Card.Title key={index}>{item}</Card.Title>))}
                </Card.Body></Card>
            </div>
            <div className="text-center">
                <Button className="m-3" onClick={() => { setstage(1); setitems(''); }}>Reset</Button>
            </div>
        </div>
    );
}

export default CategoriesStack;
