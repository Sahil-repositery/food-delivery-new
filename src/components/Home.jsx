import React, { useContext, useState } from "react";
import Nav from "./Nav";
import Catagories from "./Catagories";
import Card from "./Card";
import { food_items } from "./food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "./card2";
import { useSelector } from "react-redux";

const Home = () => {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)
  function filter(category) {
    if (category === "All") {
      setCate(food_items)
    }

    else {
      let newList = food_items.filter((items) => (items.food_category === category.toLowerCase()))
      setCate(newList)
    }
  }
  let items = useSelector(state => state.cart)
  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
  let deliveryFee = 20;
  let taxes = subtotal * 0.5 / 100
  let total = subtotal + deliveryFee + taxes;
  return (
    <div className="bg-slate-200 w-full h-screen">
      <Nav />
      {!input ? <div className="h-[100px] w-[100%] flex justify-center items-center gap-5">
        {Catagories.map((item) => {
          return <div key={item.id} className="h-[98px] w-[98px] bg-white flex flex-col items-start gap-4 justify-start 
              p-3 text-xs text-gray-600 font-semibold mt-5 rounded-md shadow-xl hover:bg-green-200 
              transition-all duration-200" onClick={() => filter(item.name)}>
            {item.icon}
            {item.name}
          </div>
        })}
      </div> : null}
      <div className="flex flex-wrap p-8 justify-center items-center gap-8 ">
        {cate.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.food_image}
            type={item.food_type}
            name={item.food_name}
            price={item.price}
          />
        ))}
      </div>
      <div className={` overflow-auto w-full md:w-[35%] h-[100%] bg-white fixed top-0 right-0 shadow-xl
         p-5 transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className="w-fullh-[25px] flex justify-between items-center">
          <span className="text-green-500 size-xl">Order Items</span>
          <RxCross2 className="text-green-500 size-5 font-semibold cursor-pointer
           hover:text-gray-600" onClick={() => {
              setShowCart(false)
            }} />
        </header>
        <div className="mt-5">
          {items.map((item) => {
            return (
              <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
            )
          })}
        </div>
        <div className="w-full border-t-2 border-gray-400 mt-5 p-4 gap-2 border-b-2">
          <div className=" text-gray-400 font-lg flex justify-between">
            <span>Subtotal</span>
            <span className="text-green-500">Rs {subtotal}/-</span>
          </div>
          <div className=" text-gray-400 font-lg flex justify-between">
            <span>DeliveryFee</span>
            <span className="text-green-500">Rs {deliveryFee}/-</span>
          </div>
          <div className=" text-gray-400 font-lg flex justify-between">
            <span>Taxes</span>
            <span className="text-green-500">Rs {taxes}/-</span>
          </div>
        </div>
        <div className="p-4 text-gray-400 text-lg flex justify-between">
          <span>Total</span>
            <span className="text-green-500">Rs {total}/-</span>
        </div>
      </div>

    </div>
  )
}
export default Home;