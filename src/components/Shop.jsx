import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/Slices/Products";
import Card from "./Card";
import { useState } from "react";
const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://perenual.com/api/species-list?key=sk-0JUE66b7ba05a85536486"
        );
        dispatch(setProducts(response.data.data));
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-4xl font-bold">Loading...</p>
        </div>
      ) : (
        <div className="w-screen h-auto pt-20 grid lg:grid-cols-3 grid-cols-1 place-items-center gap-4 px-8 pb-10">
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <Card
                img={product.default_image?.medium_url} // Use optional chaining to avoid errors if image is undefined
                name={product.common_name || "No Name Available"} // Fallback if common_name is undefined
                price={index % 2 == 0 ? 45 : 120} // Static price, consider replacing with dynamic data if available
                key={index}
                id={index}
              />
            ))
          ) : (
            <div>No products found</div>
          )}
        </div>
      )}
    </>
  );
};

export default Shop;
