import React from "react";
import leaves from "./images/leaves.jpg";
import { Button } from "./ui/button";

const Main = () => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center object-cover px-5 flex-wrap min-h-auto bg-cover"
      style={{ backgroundImage: `url(${leaves})` }}
    >
      <div className="flex flex-col lg:flex-row w-full px-4 justify-between items-center py-2">
        <div className="grid grid-cols-1 place-items-center gap-8 mb-6 lg:mb-0">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center">
            Plants Pro
          </div>
          <a href="/shop">
            <Button className="rounded shadow w-48 sm:w-60 lg:w-72">
              View Shop
            </Button>
          </a>
        </div>
        <div className="py-5 px-4 text-wrap lg:w-2/4 text-white w-full text-sm sm:text-base lg:text-lg blur-bg rounded-lg border-slate-100 border p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          molestiae neque impedit. Inventore quasi voluptatem assumenda corporis
          maxime totam officiis tempore excepturi odit vel ea expedita
          necessitatibus non cumque iste eaque neque, autem veniam ratione
          libero dolor laboriosam fuga. Vitae, facere commodi iure, vel veniam
          modi enim voluptas ipsa laudantium deserunt voluptatum, beatae cum
          expedita voluptatibus consectetur odit optio rerum assumenda laborum
          at odio rem debitis alias nam! Impedit recusandae aliquid harum, non
          voluptates placeat? Numquam, labore laboriosam. Minus, perspiciatis?
        </div>
      </div>
    </div>
  );
};

export default Main;
