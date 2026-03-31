import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />

      <div className="container-width py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Premium Digital Tools</h1>

        <Products products={products} handleAddToCart={handleAddToCart} />

        <div className="mt-12">
          <Cart
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
}
<div className="container-width py-10"></div>


export default App;