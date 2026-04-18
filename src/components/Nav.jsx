import React, { useContext,useEffect,useState } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { dataContext } from "../context/UserContext";
import { food_items } from "./food";
import { useSelector } from "react-redux";
const Nav = () => {
  let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)
   useEffect(() => {
    let newlist =food_items.filter((item)=> item.food_name.toLowerCase().includes(input))
    setCate(newlist)
   },[input])
     let items=useSelector(state=>state.cart)

    return(
      <div className="h-[55px] w-screen flex items-center justify-between px-8">
        <div className="h-[40px] w-[40px] bg-white flex items-center justify-center rounded-md">
            <MdFastfood className="h-[25px] w-[25px] text-green-500" />
        </div>
        
            <form className="flex h-[45px] w-[60%] bg-white items-center gap-5 px-5 rounded-md" 
            onSubmit={(e)=>e.preventDefault()} >
               <IoSearch className="text-[20px] text-green-500 shadow-md"/>
               <input type="text" value={input} placeholder="Search Items..." className="w-[100%] 
               outline-none text-[16px]" onChange={(e) => setInput(e.target.value)} value={input}/>
            </form>
        
          <div className="h-[40px] w-[40px] bg-white flex items-center justify-center rounded-md relative" 
          onClick={()=>{
            setShowCart(true)
          }}>
            <span className="absolute -top-1 right-0.5 text-green-500 font-semibold">{items.length}</span>
            <PiHandbagSimpleBold className="h-[25px] w-[25px] text-green-500 shadow-lg cursor-pointer" />
            </div>
      </div>
    )
}
export default Nav;