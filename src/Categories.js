export default function Categories({ name }) {
    function handleClick() {
        alert(name);
    }

    return (
        <button onClick={handleClick}>{name}</button>
    );
}
