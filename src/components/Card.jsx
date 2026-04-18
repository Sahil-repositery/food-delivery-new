import React from "react";
import { TbLeaf } from "react-icons/tb";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux"



const Card = ({name,type,image,price,id}) => {
    let dispatch=useDispatch()
    return (
        <div className="h-[300px] w-[225px] bg-white p-2 rounded-md flex flex-col gap-2 shadow-lg
         hover:border-2 border-green-400">
            
            <div className="h-[60%] w-full overflow-hidden rounded-md ">
                <img src={image} alt="pancake" />
            </div>
            <div className="font-semibold">
               {name}
            </div>
            <div className="flex justify-between font-semibold text-green-500 mb-1">
                <div>Rs {price}/-</div>
                <div className="flex  items-center gap-2">{type==="veg"? <TbLeaf /> : <GiChickenOven />}<span>{type}</span></div>
            </div>
            <div>
                <button className="h-[35px] w-[210px] bg-green-500 rounded-md text-white hover:bg-green-300
                transition-all duration-75"onClick={() => dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}))}>Add to dish</button>
            </div>
        </div>
    )
}

export default Card;