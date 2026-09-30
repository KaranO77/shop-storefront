import './App.css';
function Newsletter() {
    return (
        <section className="newsletter">
            <div>
                <p className="section-tag">STAY UPDATED</p>

                <h2>Get the latest updates.</h2>

                <p>
                    Subscribe to our newsletter for new arrivals,
                    exclusive offers and more.
                </p>
            </div>

            <div className="newsletter-form">
                <input
                    type="email"
                    placeholder="Enter your email"
                />

                <button>Subscribe →</button>
            </div>
        </section>
    );
}

export default Newsletter;