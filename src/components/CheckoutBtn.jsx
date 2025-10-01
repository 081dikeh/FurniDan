import { Link } from "react-router-dom";

export default function CheckoutBtn({title}) {
  return (
    <div>
      <button className="checkoutBtn"><Link to="/checkout">{title}</Link></button>
    </div>
  );
}