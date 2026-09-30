import './App.css';
function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-tag">NEW COLLECTION 2026</p>

                <h1>
                    Discover Your
                    <span>Unique Style.</span>
                </h1>

                <p className="hero-text">
                    Explore premium products crafted for your
                    lifestyle. Modern design, timeless quality.
                </p>

                <button className="hero-btn">
                    Explore Collection →
                </button>
            </div>

            <div className="hero-visual">
                <div className="hero-glow"></div>

                <div className="hero-circle">
                    <span>NEW</span>
                </div>

                <div className="hero-product">
                    <div className="product-shape">
                        <div className="product-stripe"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;