import { useEffect, useState } from "react";
import './Addtocart.css';

function readCart() {
    try {
        const data = JSON.parse(localStorage.getItem("cart") || "[]");
        return Array.isArray(data) ? data.map(item => ({ ...item, quantity: Math.max(1, Number(item.quantity) || 1) })) : [];
    } catch {
        return [];
    }
}

function Addtocart({ isOpen, onClose }) {
    const [items, setItems] = useState(readCart);

    useEffect(() => {
        const handleCartUpdate = event => setItems(event.detail);
        window.addEventListener("cart-updated", handleCartUpdate);
        return () => window.removeEventListener("cart-updated", handleCartUpdate);
    }, []);

    useEffect(() => {
        if (!isOpen) return undefined;

        const handleEscape = event => {
            if (event.key === "Escape") onClose();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);
                                    
    function updateCart(nextItems) {
        localStorage.setItem("cart", JSON.stringify(nextItems));
        window.dispatchEvent(new CustomEvent("cart-updated", { detail: nextItems }));
    }

    function changeQuantity(id, amount) {
        updateCart(items
            .map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
            .filter(item => item.quantity > 0));
    }

    function removeItem(id) {
        updateCart(items.filter(item => item.id !== id));
    }

    const itemCount = items.reduce((count, item) => count + item.quantity, 0);
    const subtotal = items.reduce((total, item) => total + (Number(item.price) || 0) * item.quantity, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    if (!isOpen) return null;

    return (
        <div className="cart-overlay" onMouseDown={event => event.target === event.currentTarget && onClose()}>
            <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping cart">

            <div className="cart-header">
                <div>
                    <p className="cart-label">YOUR BAG</p>
                    <h1>Shopping Cart</h1>
                </div>

                <div className="cart-header-actions">
                    <span className="cart-count">
                        {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
                    </span>
                    <button className="cart-close" type="button" onClick={onClose} aria-label="Close cart">×</button>
                </div>
            </div>

                <div className="cart-items">

                    {items.length === 0 ? (
                        <div className="cart-empty">
                            <h2>Your cart is empty</h2>
                            <p>Explore the products and add something you love.</p>
                        </div>
                    ) : items.map((item, index) => (
                        <div className="cart-item" key={item.id ?? `${item.title}-${index}`}>

                            {/* Image */}

                            <div className="cart-item-image">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                />
                            </div>


                            {/* Product Info */}

                            <div className="cart-item-info">

                                <span>
                                    {item.category}
                                </span>

                                <h2>
                                    {item.title}
                                </h2>

                                <p>
                                    ${item.price}
                                </p>

                            </div>


                            {/* Quantity */}

                            <div className="quantity">

                                <button aria-label={`Remove one ${item.title}`} onClick={() => changeQuantity(item.id, -1)}>-</button>

                                <span>{item.quantity}</span>

                                <button aria-label={`Add one ${item.title}`} onClick={() => changeQuantity(item.id, 1)}>+</button>

                            </div>


                            {/* Price */}

                            <div className="cart-item-price">
                                <strong>
                                    ${(Number(item.price) || 0).toFixed(2)}
                                </strong>

                                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                                    Remove
                                </button>
                            </div>

                        </div>
                    ))}

                </div>

                <div className="cart-summary">

                    <p className="summary-label">
                        ORDER SUMMARY
                    </p>

                    <h2>Summary</h2>


                    <div className="summary-row">
                        <span>Subtotal</span>
                        <strong>${subtotal.toFixed(2)}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <strong>Free</strong>
                    </div>

                    <div className="summary-row">
                        <span>Tax</span>
                        <strong>${tax.toFixed(2)}</strong>
                    </div>


                    <div className="summary-divider"></div>


                    <div className="summary-total">
                        <span>Total</span>
                        <strong>${total.toFixed(2)}</strong>
                    </div>


                    <button className="checkout-btn" disabled={items.length === 0}>
                        Proceed to Checkout
                        <span>→</span>
                    </button>

                    <p className="secure-text">
                        Secure checkout
                    </p>

                </div>

            </aside>
        </div>
    );
}

export default Addtocart;