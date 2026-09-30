
import { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Feature from './Feature.jsx';
import Categories from './Categories.jsx';
import Homefooter from './Homefooter.jsx';
import Newsletter from './Newsletter.jsx';
import Addtocart from './Addtocart.jsx';
import './App.css';

function getCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        return Array.isArray(cart) ? cart.reduce((count, item) => count + (Number(item.quantity) || 1), 0) : 0;
    } catch {
        return 0;
    }
}

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(getCartCount);

    useEffect(() => {
        const handleCartUpdate = event => {
            const cart = Array.isArray(event.detail) ? event.detail : [];
            setCartCount(cart.reduce((count, item) => count + (Number(item.quantity) || 1), 0));
        };
        window.addEventListener('cart-updated', handleCartUpdate);
        return () => window.removeEventListener('cart-updated', handleCartUpdate);
    }, []);

    return (
        <>
            <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
            <Addtocart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <Hero />
            <Feature />
            <Categories />
            <Newsletter />
            <Homefooter />
        </>
    )
}
export default App