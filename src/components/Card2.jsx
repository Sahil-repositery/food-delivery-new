import React from "react";
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { IncrementQty, RemoveItem,DecrementQty } from "../redux/cartSlice";

function Card2({name,id,price,image,qty}) {
    
    let dispatch = useDispatch()
    return (
        <div className="w-full h-[120px] shadow-lg p-2 flex">
            <div className="h-full w-[60%] gap-4 flex">
                <div className="h-full w-[50%] rounded-lg overflow-hidden">
                    <img src={image} alt="img" className="h-full w-full  " />
                </div>
                <div className="h-full w-[50%] flex flex-col items-center justify-center gap-6">
                    <div className="text-black-500 text-lg">{name}</div>
                    <div className="h-[30px] w-[75px] flex rounded-md overflow-hidden shadow-lg font-semibold 
                    border-2 border-green-400">
                        < button className="h-full w-[30%] bg-white text-green-500 hover:bg-blue-300"
                        onClick={()=>qty>1?dispatch(DecrementQty({id})):1}>-</button>
                        <span className="h-full w-[40%] bg-gray-200 text-green-500 flex items-center justify-center">{qty}</span>
                        <button className="h-full w-[30%] bg-white text-green-500 hover:bg-blue-300"
                        onClick={()=>dispatch(IncrementQty({id}))}>+</button>
                    </div>
                </div>
            </div>
            <div className="h-full w-[40%] flex flex-col justify-center items-end gap-8 p-2">
             <span className="text-green-500">Rs {price}</span>
             <RiDeleteBin6Line className="text-red-500 text-xl cursor-pointer" onClick={()=>dispatch(RemoveItem(id))}/>
            </div>
        </div>
    )
}
export default Card2;