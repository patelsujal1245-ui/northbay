import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

// Product Data
const products = [
  {
    id: 1,
    name: "iPhone 16",
    price: "₹79,999",
    rating: "4.8",
  },
  {
    id: 2,
    name: "HP Laptop",
    price: "₹59,999",
    rating: "4.5",
  },
  {
    id: 3,
    name: "Boat Headphones",
    price: "₹1,999",
    rating: "4.3",
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    price: "₹69,999",
    rating: "4.7",
  },
  {
    id: 5,
    name: "Apple Watch",
    price: "₹39,999",
    rating: "4.9",
  },
  {
    id: 6,
    name: "Samsung Galaxy S25 Ultra",
    price: "₹98,999",
    rating: "4.8",
  },
  {
    id: 7,
    name: "Samsung Watch Ultra 2",
    price: "₹64,999",
    rating: "4.7",
  },
  {
    id: 8,
    name: "iPhone 17 Air",
    price: "₹1,19,999",
    rating: "4.2",
  },
  {
    id: 9,
    name: "Samsung Galaxy 45W Travel Adapter",
    price: "₹3,599",
    rating: "4.2",
  },
  {
    id: 10,
    name: "LG 27U411A-BD 68.5 cm (27 Inch) FHD Monitor",
    price: "₹9,499",
    rating: "4.3",
  },
  {
    id: 11,
    name: "Minimalist 10% Niacinamide Serum",
    price: "₹236",
    rating: "4.2",
  },
  {
    id: 12,
    name: "The Derma Co Sali-Cinamide Anti-Acne Face Serum",
    price: "₹509",
    rating: "4.1",
  },
];

function App() {
  return (
    <div>
      <Navbar />

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
export default App;