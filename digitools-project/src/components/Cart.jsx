const Cart = ({ cart, handleRemoveFromCart, handleCheckout, setActiveSection }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-[980px] mx-auto bg-white border border-gray-200 rounded-md p-8">
      <div className="text-center mb-8">
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
            className="btn h-8 min-h-8 px-5 rounded-full text-[11px] bg-white border border-gray-300 text-gray-600"
          >
            Products
          </button>

          <button className="btn h-8 min-h-8 px-5 rounded-full text-[11px] bg-[#7c3aed] text-white border-none">
            Cart {cart.length}
          </button>
        </div>
      </div>

      <div className="border border-gray-200 rounded-md p-5">
        <h3 className="text-[14px] font-semibold text-[#1f2937] mb-5">Your Cart</h3>

        {cart.length === 0 ? (
          <div className="text-center py-10 text-gray-500 text-[13px]">
            Cart is empty
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_auto] items-center border-b border-gray-200 pb-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-4 h-4 object-contain"
                    />
                    <div>
                      <h4 className="text-[12px] font-medium text-[#1f2937]">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-gray-500">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-[11px] text-pink-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-5 text-[11px] text-gray-500">
              <span>TOTAL</span>
              <span className="text-[14px] text-[#1f2937] font-medium">${total}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="btn w-full h-9 min-h-9 rounded-full mt-4 bg-[#7c3aed] text-white border-none text-[12px] hover:bg-[#6d28d9]"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;