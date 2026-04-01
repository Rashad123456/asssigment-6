const Cart = ({ cart, handleRemoveFromCart, handleCheckout, setActiveSection }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="container-width py-16">
      <div className="max-w-[900px] mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-bold text-[#1f2937] mb-2">
            Premium Digital Tools
          </h2>

          <p className="text-[12px] text-gray-500 max-w-[500px] mx-auto mb-5">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          {/* Toggle */}
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setActiveSection("products")}
              className="btn h-8 min-h-8 px-5 rounded-full text-[11px] bg-white border border-gray-300 text-gray-600"
            >
              Products
            </button>

            <button className="btn h-8 min-h-8 px-5 rounded-full text-[11px] bg-[#7c3aed] text-white border-none">
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Cart Box */}
        <div className="border border-gray-200 rounded-lg p-6">

          <h3 className="text-[14px] font-semibold text-[#1f2937] mb-6">
            Your Cart
          </h3>

          {cart.length === 0 ? (
            <div className="text-center py-10 text-gray-500 text-[13px]">
              Cart is empty
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-6 h-6"
                      />
                      <div>
                        <h4 className="text-[13px] font-medium">
                          {item.name}
                        </h4>
                        <p className="text-[12px] text-gray-500">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-[12px] text-pink-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mt-6 text-[12px]">
                <span className="text-gray-500">TOTAL</span>
                <span className="text-[20px] font-bold text-[#7c3aed]">
                  ${total}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="btn w-full h-10 min-h-10 rounded-full mt-6 bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white border-none text-[12px]"
              >
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;