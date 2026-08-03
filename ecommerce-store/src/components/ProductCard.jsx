import "./ProductCard.css";

function ProductCard({
  id,
  name,
  price,
  rating,
  quantity,
  increaseQuantity,
}) {
  return (
    <div className="product-card">
      <h2>{name}</h2>

      <p>
        <strong>Price:</strong> {price}
      </p>

      <p className="rating">⭐ {rating}</p>

      <div className="quantity-box">
        <button onClick={() => increaseQuantity(id)}>+</button>

        <span>{quantity}</span>
      </div>
    </div>
  );
}

export default ProductCard;