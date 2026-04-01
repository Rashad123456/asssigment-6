import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container-width flex items-center justify-between h-[72px]">
        <div className="text-[26px] font-bold text-[#7c3aed]">DigiTools</div>

        <nav className="hidden lg:flex items-center gap-8 text-[12px] text-gray-500 font-medium">
          <a href="#">Products</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-[12px] text-gray-500">
            Login
          </a>

          <button className="btn h-8 min-h-8 px-4 rounded-full bg-[#7c3aed] text-white border-none text-[11px] hover:bg-[#6d28d9]">
            Get Started
          </button>

          <div className="relative">
            <FaShoppingCart className="text-[15px] text-[#7c3aed]" />
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#7c3aed] text-white text-[9px] flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;