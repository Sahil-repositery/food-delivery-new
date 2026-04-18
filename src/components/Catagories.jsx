
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { PiBowlSteam } from "react-icons/pi";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

 const Catagories = [
    {
       id:1,
       name:"All",
       icon:<TiThSmallOutline className="h-[40px] w-[40px] text-green-500"/>,

    },
    {
        id:2,
       name:"Breakfast",
       icon:<MdOutlineFreeBreakfast className="h-[45px] w-[45px] text-green-500" />,
    },
    {
        id:3,
       name:"Soups",
       icon:<PiBowlSteam className="h-[45px] w-[45px] text-green-500" />,
    },
    {
        id:4,
       name:"Pasta",
       icon:<CiBowlNoodles className="h-[45px] w-[45px] text-green-500"/>,
    },
    {
        id:5,
       name:"Main_course",
       icon:<MdOutlineFoodBank className="h-[45px] w-[45px] text-green-500" />,
    },
    {
        id:6,
       name:"Pizza",
       icon:<GiFullPizza className="h-[45px] w-[45px] text-green-500"/>,
    },
    {
        id:7,
       name:"Burger",
       icon:<GiHamburger className="h-[45px] w-[45px] text-green-500"/>,

    },
]

export default Catagories;