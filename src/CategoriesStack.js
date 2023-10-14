import { Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./Categories";

function CategoriesStack() {
    const [c1, setc1] = useState('');
    const [c2, setc2] = useState('');
    const [c3, setc3] = useState('');

    useEffect(() => {
        async function OpenaiPrompt() {
            const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    prompt: 'Generate the names of three broad categories of goods or services.They should be broad enough to contain three subcategories.Each item should have its first letter capitalized.In your response, only provide the name of each broad category, separated by comma.Do not include any words other than the categories.Example: “Food, Arts and Crafts Materials, Tech Gadgets”',
                    model: 'text-davinci-002',
                    max_tokens: 50,
                    temperature: 0.5,
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
            const cate = response.data.choices[0].text.split(',');
            setc1(cate[0]);
            setc2(cate[1]);
            setc3(cate[2]);
        }
        
        async function OpenaiPrompt2(name) {
            const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    prompt: `Generate the names of three subcategories of ${name}. Each item should have its first letter capitalized.In your response, only provide the name of each broad category, separated by comma.Do not include any words other than the categories.Example: “Food, Arts and Crafts Materials, Tech Gadgets”`,
                    model: 'text-davinci-003',
                    max_tokens: 50,
                    temperature: 0.5,
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
            const cate = response.data.choices[0].text.split(',');
            setc1(cate[0]);
            setc2(cate[1]);
            setc3(cate[2]);
        }
        async function OpenaiPrompt3(name) {
             const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    prompt: `Generate fake product names and prices (in USD) for ${name}. The names should sound like they would appear on an online shopping website. Each item and price pair should be separated by a semicolon. The format should be “[name] - [cost];”. For example: “Sparkling Berry Fusion - $3.99; Premium Green Tea Elixir - $2.49”;`,
                    model: 'text-davinci-003',
                    max_tokens: 1000,
                    temperature: 0.5,
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
            console.log(response.data.choices[0].text);
        }
        OpenaiPrompt();
        //OpenaiPrompt2('Food');
        //OpenaiPrompt3('School supplies');

    }, []);

    

    return (
          <Stack
            className="m-3 d-flex justify-content-center"
            direction="horizontal"
            gap={2}
          >
            <Categories name={c1}/>
            <Categories name={c2}/>
            <Categories name={c3}/>
            </Stack>
    );
}

export default CategoriesStack;
