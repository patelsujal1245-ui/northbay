import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 16",
      price: "₹79,999",
      rating: "4.8",
      quantity: 0,
    },
    {
      id: 2,
      name: "HP Laptop",
      price: "₹59,999",
      rating: "4.5",
      quantity: 0,
    },
    {
      id: 3,
      name: "Boat Headphones",
      price: "₹1,999",
      rating: "4.3",
      quantity: 0,
    },
    {
      id: 4,
      name: "Samsung Galaxy S23",
      price: "₹69,999",
      rating: "4.7",
      quantity: 0,
    },
    {
      id: 5,
      name: "Apple Watch",
      price: "₹39,999",
      rating: "4.9",
      quantity: 0,
    },
    {
      id: 6,
      name: "Samsung Galaxy S25 Ultra",
      price: "₹98,999",
      rating: "4.8",
      quantity: 0,
    },
    {
      id: 7,
      name: "Samsung Watch Ultra 2",
      price: "₹64,999",
      rating: "4.7",
      quantity: 0,
    },
    {
      id: 8,
      name: "iPhone 17 Air",
      price: "₹1,19,999",
      rating: "4.2",
      quantity: 0,
    },
    {
      id: 9,
      name: "Samsung Galaxy 45W Travel Adapter",
      price: "₹3,599",
      rating: "4.2",
      quantity: 0,
    },
    {
      id: 10,
      name: "LG 27U411A-BD 68.5 cm (27 Inch) FHD Monitor",
      price: "₹9,499",
      rating: "4.3",
      quantity: 0,
    },
    {
      id: 11,
      name: "Minimalist 10% Niacinamide Serum",
      price: "₹236",
      rating: "4.2",
      quantity: 0,
    },
    {
      id: 12,
      name: "The Derma Co Sali-Cinamide Anti-Acne Face Serum",
      price: "₹509",
      rating: "4.1",
      quantity: 0,
    },
  ]);

  const cart = products.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  const increaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  return (
    <div>
      <Navbar cart={cart} />

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            quantity={product.quantity}
            increaseQuantity={increaseQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default App;