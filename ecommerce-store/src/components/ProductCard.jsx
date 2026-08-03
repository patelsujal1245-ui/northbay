
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="product-card">

      <h2>{props.name}</h2>

      <p className="rating">
        ⭐⭐⭐⭐⭐ ({props.rating})
      </p>

      <h3>{props.price}</h3>

      <button>Add to Cart</button>

    </div>
  );
}

export default ProductCard;