import React from 'react';

const Cart = ({ cart, handleRemove, handleCheckout }) => {
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="max-w-4xl mx-auto border border-gray-100 rounded-3xl p-10 bg-white shadow-xl">
      <h2 className="text-2xl font-bold mb-8">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-10 text-gray-400">Cart is empty!</div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-6">
                <div className="flex items-center gap-6">
                  <img src={item.icon} className="w-12 h-12" alt="" />
                  <div><h4 className="font-bold text-lg">{item.name}</h4><p className="text-gray-400 text-sm">${item.price}</p></div>
                </div>
                <button onClick={() => handleRemove(item.id)} className="text-red-500 font-bold hover:underline">Remove</button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-10">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-3xl font-extrabold text-purple-600">${total}</span>
          </div>
          <button onClick={handleCheckout} className="btn bg-purple-600 hover:bg-purple-700 text-white w-full rounded-full mt-8 border-none h-14">Proceed To Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;