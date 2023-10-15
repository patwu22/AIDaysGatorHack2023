import { Button } from "react-bootstrap";

function Categories({ name, stage, setstage, setname }) {
    const handleClick = () => {
        setname(name);
        setstage(stage + 1);
    }

    return (
        <Button onClick={handleClick}>{name}</Button>
    );
}

export default Categories;
