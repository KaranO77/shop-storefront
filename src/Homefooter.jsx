import './App.css';
function Homefooter() {
    return (
        <>
            <footer className="home-footer">
                <div className="footer-logo">
                    SHOP<span>.</span>

                    <p>
                        Modern products.
                        <br />
                        Exceptional experience.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Explore</h3>
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/categories">Categories</a>
                </div>

                <div className="footer-links">
                    <h3>Support</h3>
                    <a href="/contact">Contact</a>
                    <a href="/shipping">Shipping</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>

                <div className="footer-links">
                    <h3>Follow Us</h3>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </div>
            </footer>

            <div className="copyright">
                © 2026 SHOP. All rights reserved.
            </div>
        </>
    );
}

export default Homefooter;