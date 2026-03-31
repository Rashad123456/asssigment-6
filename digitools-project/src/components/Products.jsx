const Products = ({ products, handleAddToCart }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-5 rounded-lg shadow border">
          <img src={product.icon} alt={product.name} className="w-12 h-12 mb-3" />
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 text-sm mb-3">{product.description}</p>
          <h3 className="text-2xl font-bold mb-1">${product.price}</h3>
          <p className="text-sm text-gray-400 mb-3">/{product.period}</p>

          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            {product.features.map((feature, index) => (
              <li key={index}>✔ {feature}</li>
            ))}
          </ul>

          <button
            onClick={() => handleAddToCart(product)}
            className="btn w-full bg-purple-600 text-white border-none rounded-full"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
  
};
export default Products;
  
