import './App.css';
function Categories() {
    return (
        <section className="categories-section">
            <div className="section-heading">
                <div>
                    <p className="section-tag">EXPLORE</p>
                    <h2>Shop by Category</h2>
                </div>

                <a href="/categories">View All →</a>
            </div>

            <div className="categories-grid">
                <div className="category-card category-one">
                    <div>
                        <p>01</p>
                        <h3>Fashion</h3>
                        <span>Explore Collection →</span>
                    </div>
                </div>

                <div className="category-card category-two">
                    <div>
                        <p>02</p>
                        <h3>Electronics</h3>
                        <span>Explore Collection →</span>
                    </div>
                </div>

                <div className="category-card category-three">
                    <div>
                        <p>03</p>
                        <h3>Accessories</h3>
                        <span>Explore Collection →</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;