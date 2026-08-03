import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            <h2>NorthBay 🛒</h2>
            </div>

            <ul className="nav-links">
                <li>Home</li>
                <li>Products</li>
                <li>Categories</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="nav-buttons">
                <button>Login</button>
                <button>Cart 🛒</button>
            </div>
    </nav>  
  );
}

export default Navbar;