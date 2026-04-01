import { useState } from "react";

const badgeStyles = {
  popular: "bg-[#ede9fe] text-[#7c3aed]",
  new: "bg-[#dcfce7] text-[#16a34a]",
  "best seller": "bg-[#fef3c7] text-[#d97706]",
};

const ProductCard = ({ product, handleAddToCart }) => {
  const { name, description, price, period, tagType, features, icon } = product;
  const [added, setAdded] = useState(false);

  const onClickBuy = () => {
    handleAddToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-md p-5 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <img src={icon} alt={name} className="w-8 h-8 object-contain" />

        <span
          className={`text-[10px] font-medium px-2 py-1 rounded-full ${
            badgeStyles[tagType] || "bg-[#ede9fe] text-[#7c3aed]"
          }`}
        >
          {tagType}
        </span>
      </div>

      <h3 className="text-[18px] font-bold text-[#1f2937] mb-2">{name}</h3>

      <p className="text-[12px] text-gray-500 leading-5 min-h-[54px] mb-4">
        {description}
      </p>

      <div className="mb-4">
        <h4 className="text-[30px] font-bold text-[#111827]">${price}</h4>
        <p className="text-[12px] text-gray-400">/{period}</p>
      </div>

      <ul className="space-y-1.5 mb-5">
        {features.map((feature, index) => (
          <li key={index} className="text-[12px] text-gray-600">
            ✔ {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onClickBuy}
        className="btn w-full h-9 min-h-9 rounded-full bg-[#7c3aed] text-white border-none text-[12px] hover:bg-[#6d28d9]"
      >
        {added ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;