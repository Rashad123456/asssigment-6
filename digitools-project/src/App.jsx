import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import SectionToggle from "./components/SectionToggle";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [activeSection, setActiveSection] = useState("products");
  const [cart, setCart] = useState([]);

  // 🔄 Load products
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // 🛒 Add to cart
  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.warning(`${product.name} is already in your cart`);
      return;
    }

    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };

  // ❌ Remove from cart
  const handleRemoveFromCart = (id) => {
    const removed = cart.find((item) => item.id === id);
    setCart(cart.filter((item) => item.id !== id));
    toast.error(`${removed?.name || "Product"} removed from cart`);
  };

  // ✅ Checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.info("Your cart is empty");
      return;
    }

    setCart([]);
    toast.success("Proceed to checkout complete");
  };

  return (
    <div className="bg-[#f5f5f7] min-h-screen">
      {/* Navbar */}
      <Navbar cartCount={cart.length} />

      {/* Banner */}
      <Banner />

      {/* Stats */}
      <Stats />

      {/* Main Section */}
      <main className="container-width py-16">
        <SectionToggle
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {activeSection === "products" ? (
          <Products
            products={products}
            handleAddToCart={handleAddToCart}
          />
        ) : (
          <Cart
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleCheckout={handleCheckout}
            setActiveSection={setActiveSection}
          />
        )}
      </main>

      {/* Steps */}
      <Steps />

      {/* Pricing */}
      <Pricing />

      {/* Footer */}
      <Footer />

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={1800} />
    </div>
  );
}

export default App;