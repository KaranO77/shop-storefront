import "./Products.css";

function Products(props) {


    return (
        <div className="product-card" key={props.id}>

            {/* Product Image */}

            <div className="product-image">
                <img
                    src={props.img}
                    alt="Product"
                />

                <span className="product-badge">
                    NEW
                </span>

                <button className="wishlist-btn">
                    ♡
                </button>
            </div>


            {/* Product Info */}

            <div className="product-info">

                <span className="product-category">
                    {props.category}
                </span>

                <h2 className="product-title">
                    {props.title}
                </h2>

                <p className="product-description">
                    Stylish and comfortable product
                    designed for everyday use.
                </p>


                {/* Rating */}

                <div className="product-rating">
                    <span>★★★★★</span>
                    <small>(4.5)</small>
                </div>


                {/* Price and Cart */}

                <div className="product-bottom">

                    <div className="price-box">
                        <h3>${props.price.toFixed(2)}</h3>
                        <del>$129.99</del>
                    </div>

                    <button onClick={() => props.add(props)} className="add-cart-btn">
                        <span>+</span>
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Products;