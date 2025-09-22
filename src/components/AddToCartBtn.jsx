import { Link } from "react-router-dom";

export default function AddToCartBtn({ title, productId, addToCart, product }) {

    return (
        <button 
            onClick={(e) => { 
                e.stopPropagation();
                addToCart(product);
            }}>
            <Link to="/cartpage">{title}</Link>
        </button>
    )
}