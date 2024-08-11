import React, { useEffect, useState } from "react";
import SheetComponent from "./SheetComponent";
import { ShoppingCart, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/Slices/Cart";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      for (let i = 0; i < cartItems.length; i++) {
        const price = cartItems[i].price * Number(cartItems[i].quantity);
        total += price;
      }
      setTotal(total);
    };
    calculateTotal();
  }, [cartItems]);

  const deleteProducts = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const Card = ({ img, name, quantity, id }) => {
    return (
      <div className="w-full h-auto flex justify-between py-3 border-b border-slate-200 items-center">
        <div>
          <img src={img} alt={name} className="w-[58px] rounded" />
        </div>
        <div className="flex justify-center items-center flex-wrap w-[80px]">
          <p className="text-sm">{name}</p>
        </div>
        <div>
          <p className="font-semi-bold">{quantity}</p>
        </div>
        <div className="relative top-0 end-0">
          <X size={14} onClick={() => deleteProducts(id)} />
        </div>
      </div>
    );
  };

  return (
    <SheetComponent
      title="Cart"
      trigger={
        <div className="relative">
          <ShoppingCart />
          <sup className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
            {cartItems.length}
          </sup>
        </div>
      }
      side={"right"}
      content={
        <div className="w-full h-[80vh] overflow-y-scroll py-2">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <Card
                name={item.name}
                quantity={item.quantity}
                img={item.img}
                key={index}
                id={item.id} 
              />
            ))
          ) : (
            <div className="text-center pt-10 text-2xl">No items in cart.</div>
          )}
          <div className="w-full fixed bottom-0 pb-5">
            <p>Total: {total}</p>
          </div>
        </div>
      }
    />
  );
};

export default Cart;
