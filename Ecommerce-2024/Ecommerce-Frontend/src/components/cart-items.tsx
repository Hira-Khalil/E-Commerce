import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
    cartItem: any;
};

const CartItem = ({ cartItem }: CartItemProps) => {
    console.log('CartItem props:', cartItem); // Debug statement

    const { photo, productId, name, price, quantity } = cartItem;
    return (
        <div className="cart-item">
            {/* Debugging */}
            <img src={photo} alt={name} style={{ width: '150px', height: '100px' }} />
            <article>
                <Link to={`/product/${productId}`}>{name}</Link>
                <span>₹{price}</span>
            </article>
            <div>
                <button>-</button>
                <p>{quantity}</p>
                <button>+</button>
            </div>
            <button><FaTrash /></button>
        </div>
    );
}

export default CartItem;
