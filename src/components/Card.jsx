import React, { useState } from "react";
import { Button } from "./ui/button";
import DialogComponent from "./DialogComponent";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/Slices/Cart";

const Card = ({ img, name, price,id }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);

  const Content = () => {
    const [quantity, setQuantity] = useState(0);

    const addToCart = () => {
      if (quantity <= 0) {
        alert("Quantity must be greater than 0 to add to cart.");
        return;
      }
      dispatch(addProduct({ img, name, price, quantity,id}));
      console.log(cartProducts);
    };

    return (
      <>
        <div className="w-full px-3 py-2 grid place-items-center">
          <img src={img} alt={name} className="w-[320px] rounded-md" />
          <div className="w-full ps-4">
            <p className="text-2xl font-semibold py-4">{price}</p>
          </div>
          <div className="w-full ps-4">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur dolor repellat, perspiciatis vero distinctio.
            </p>
          </div>
          <div className="pt-4 w-full">
            <Label className="text-start ps-2">Select Quantity</Label>
            <Input
              type="number"
              className="w-full my-3"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
            <Button className="w-full my-1" onClick={addToCart}>
              Add to cart <ShoppingCart className="mx-1" size={16} />
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-[280px] h-[410px] grid grid-cols-1 place-items-center p-3 gap-2 border rounded-lg shadow">
        <div className="w-full px-2">
          <img
            src={img || ""}
            alt="product image"
            className="rounded-md shadow"
          />
        </div>
        <div className="w-full ps-4">
          <p className="text-xl font-semibold">{name}</p>
        </div>
        <div className="w-full ps-4">
          <p className="font-black text-slate-600">${price}</p>
        </div>
        <div className="w-full ps-1 py-2">
          <DialogComponent
            trigger={<Button>View</Button>}
            title={name}
            content={<Content />}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
