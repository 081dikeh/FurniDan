export default function RemoveFromCart({ title, removeFromCart }) {
    return (
        <button onClick={removeFromCart}>
            {title}
        </button>
    );
}