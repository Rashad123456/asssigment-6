import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container-width flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>

        <div className="flex items-center gap-5">
          <p className="text-sm text-gray-500">7 days free trial</p>

          <button className="btn bg-purple-600 text-white border-none rounded-full">
            Get Started
          </button>

          <div className="relative">
            <FaShoppingCart className="text-xl text-purple-600" />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white px-1 text-xs rounded-full">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;