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
            const cate = response.data.choices[0].text.split(',');
            setc1(cate[0]);
            setc2(cate[1]);
            setc3(cate[2]);
        }
        
        //async function OpenaiPrompt2(name) {
        //    const response = await axios.post(
        //        "https://api.openai.com/v1/completions",
        //        {
        //            prompt: `Generate the names of three subcategories of ${name}. In your response, only provide the name of each broad category, separated by comma. No formatting.`,
        //            model: 'gpt-3.5-turbo',
        //            max_tokens: 50,
        //            n: 1,
        //            stop: ".",
        //        },
        //        {
        //            headers: {
        //                "Content-Type": "application/json",
        //                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        //            }
        //        }
        //    );
        //    console.log(response);
        //}
        //async function OpenaiPrompt3(name) {
        //    const response = await axios.post(
        //        "https://api.openai.com/v1/completions",
        //        {
        //            prompt: `Generate fake product names and prices (in USD) for ${name}. The names should sound like they would appear on an online shopping website. In your response, only provide the name of each item, each on a new line. No formatting.`,
        //            model: 'gpt-3.5-turbo',
        //            max_tokens: 1000,
        //            n: 1,
        //            stop: ".",
        //        },
        //        {
        //            headers: {
        //                "Content-Type": "application/json",
        //                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        //            }
        //        }
        //    );
        //    console.log(response);
        //}
        OpenaiPrompt();
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
