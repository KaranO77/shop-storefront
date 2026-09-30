import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import './Products.css';
import './App.css';
import Products from './Products.jsx';
function Feature() {
    const [data, setData] = useState([]);
    const [toast, setToast] = useState('');
    const toastTimer = useRef(null);
    useEffect(() => {
        axios.get("https://dummyjson.com/products?/limit=10")
            .then(res => {
                setData(res.data.products);
            })
            .catch(err => console.error('Failed to load products:', err));

    }, []);

    useEffect(() => () => window.clearTimeout(toastTimer.current), []);

    function add(props) {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingItem = savedCart.find(item => item.id === props.id);
        const nextCart = existingItem
            ? savedCart.map(item => item.id === props.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item)
            : [...savedCart, { ...props, quantity: 1 }];

        localStorage.setItem("cart", JSON.stringify(nextCart));
        window.dispatchEvent(new CustomEvent("cart-updated", { detail: nextCart }));
        setToast(`${props.title} added to cart`);
        window.clearTimeout(toastTimer.current);
        toastTimer.current = window.setTimeout(() => setToast(''), 2600);
    }


    return (
        <section className="featured-section">
            <div className="section-heading">
                <div>
                    <p className="section-tag">OUR PRODUCTS</p>
                    <h2>Featured Products</h2>
                </div>

                <a href="/shop">View All →</a>
            </div>

            <div className="products-container">
                {data.map((item) => (
                    <Products
                        key={item.id}
                        id={item.id}
                        img={item.thumbnail || item.images?.[0]}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        add={add}
                    />
                ))}
            </div>

            {toast && <div className="cart-toast" role="status" aria-live="polite">{toast}</div>}

        </section>
    );
}

export default Feature;