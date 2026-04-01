const SectionToggle = ({ activeSection, setActiveSection, cartCount }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-[36px] font-bold text-[#1f2937] mb-2">
        Premium Digital Tools
      </h2>

      <p className="text-[12px] text-gray-500 max-w-[500px] mx-auto mb-5 leading-5">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      <div className="flex justify-center gap-2">
        
        <button
          onClick={() => setActiveSection("products")}
          className={`btn h-8 min-h-8 px-5 rounded-full text-[11px] ${
            activeSection === "products"
              ? "bg-[#7c3aed] text-white border-none"
              : "bg-white border border-gray-300 text-gray-600"
          }`}
        >
          Products
        </button>

        {/* Cart Button */}
        <button
          onClick={() => setActiveSection("cart")}
          className={`btn h-8 min-h-8 px-5 rounded-full text-[11px] ${
            activeSection === "cart"
              ? "bg-[#7c3aed] text-white border-none"
              : "bg-white border border-gray-300 text-gray-600"
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default SectionToggle;