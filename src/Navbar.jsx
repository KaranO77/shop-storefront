import './App.css';
function Navbar({ cartCount, onCartClick }) {
    return (
        <header className="navbar">
            <div className="logo">
                SHOP<span>.</span>
            </div>

            <nav>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/categories">Categories</a>
                <a href="/about">About</a>
            </nav>

            <div className="nav-actions">
                <button type="button" aria-label="Search">⌕</button>
                <button className="nav-cart-btn" type="button" onClick={onCartClick} aria-label={`Open cart, ${cartCount} items`}>
                    <span aria-hidden="true">🛒</span>
                    {cartCount > 0 && <span className="nav-cart-count">{cartCount > 99 ? '99+' : cartCount}</span>}
                </button>
                <button className="menu-btn" type="button" aria-label="Open menu">☰</button>
            </div>
        </header>
    );
}

export default Navbar;