import { Button } from "react-bootstrap";
import axios from 'axios';

function Categories({ name }) {

    async function handleClick() {
        const response = await axios.post(
            "https://api.openai.com/v1/completions",
            {
              prompt: 'Tell me about food.',
              model: 'text-davinci-002',
              max_tokens: 50,
              n: 1,
              stop: ".",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer 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`,
              },
            }
          );
          console.log(response.data.choices[0].text);
    }

    return (
        <Button onClick={handleClick}>{name}</Button>
    );
}

export default Categories;
