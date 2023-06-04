"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import api from '../assets/api/sepatu.json';

const Product = ({ cart, products, addToCart }) => {
  const [listSepatu, setSepatu] = useState([]);
  const [qty, setQty] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [nolQty, setNolQty] = useState(false)

  // Function to handle size selection
  const handleSizeSelection = (id, size) => {
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [id]: size,
    }));
  };

  useEffect(() => {
    setSepatu(api.products);
  }, []);

  const addQty = (id) => {
    setQty((prevQty) => ({
      ...prevQty,
      [id]: (prevQty[id] || 0) + 1,
    }));
  };

  const minQty = (id) => {
    if (qty[id] > 0) {
      setQty((prevQty) => ({
        ...prevQty,
        [id]: prevQty[id] - 1,
      }));
    }
  };

  const handleAddToCart = (product) => {
    const { id, name, price } = product;
    const size = selectedSizes[id];
    const quantity = qty[id] || 0;
    if (!quantity == 0) {
      addToCart({ id, name, price, size, quantity });
    }if (quantity == 0) {
      setNolQty(true);
    }
    
  };

  return (
    <>
      <div className="p-5 container mx-auto">
        <p className="font-titillium-web font-extrabold text-4xl">Featured</p>
        <p>Comfortable sneakers with a stylish design.</p>
        <br />
        <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
          {listSepatu.map((product) => (
            <div key={product.id} className="border rounded-lg shadow">
              <Image
                className="rounded-lg"
                src={product.image}
                width={600}
                height={200}
              />
              <div className="p-3 font-titillium-web font-bold">
                <h1 className="my-2 text-2xl font-bold">{product.name}</h1>
                <p className="my-2 text-xl">Rp. {product.price}</p>
                {/* Sizes as radio buttons */}
                <div className="flex">
                  Size:
                  {product.size.map((size) => (
                    <label
                      className={`border mx-1 px-1 rounded ${
                        selectedSizes[product.id] === size
                          ? "bg-rose-500 text-white"
                          : ""
                      }`}
                      key={size}
                      onClick={() => handleSizeSelection(product.id, size)}
                    >
                      <input
                        hidden
                        type="radio"
                        name={`size_${product.id}`}
                        value={size}
                        checked={selectedSizes[product.id] === size}
                        onChange={() => handleSizeSelection(product.id, size)}
                      />
                      {size}
                    </label>
                  ))}
                </div>
               
                <div className="flex my-2">
                  <button onClick={() => minQty(product.id)} className="border px-2 rounded">-</button>
                  <input className="border rounded w-1/4 text-center" disabled value={qty[product.id] || 0} />
                  <button onClick={() => addQty(product.id)} className="border px-2 rounded">+</button>
                </div>
                {nolQty && <p className="text-red-700">*Tambahkan qty</p>}
                <button
                  className="bg-rose-500 text-white w-full py-2 px-3 rounded-lg my-2 items-end"
                  onClick={() => handleAddToCart(product)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
