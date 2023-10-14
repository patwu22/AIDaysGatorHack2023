import { Button } from "react-bootstrap";

function Categories({ name }) {
    function handleClick() {
        alert(name);
    }

    return (
        <Button onClick={handleClick}>{name}</Button>
    );
}

export default Categories;
