import { FaGlassMartiniAlt } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";

import { BsPersonExclamation } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";


export const nav = [ "Home", "Shop", "About", "Contact" ]
export const navs =[
  {
    icon: <BsPersonExclamation className='w-10 h-auto my-4 cursor-pointer text-white'/>,
    title: "User"
  },
  {
  icon: <BiSearch className='w-10 h-auto my-4 cursor-pointer text-white'/>,
  title: "Search"
  },
  {
  icon: <CiHeart className='w-10 h-auto my-4 cursor-pointer text-white'/>,
  title: "Like"
  },
  {
  icon:<AiOutlineShoppingCart className='w-10 h-auto my-4 cursor-pointer'/>,
  title: "Cart"
  }
]

export const category = [
  {
    id:1,
    img: "../src/assets/catimg1.png",
    title: "Dining"
  },
   {
    id:2,
    img: "../src/assets/catimg2.png",
    title: "Living"
  },
   {
    id:3,
    img: "../src/assets/catimg3.png",
    title: "Bedroom"
  }
];

export const product = [
   {
    id:1,
    img: "../src/assets/proimg1.png",
    title: "Syitherine",
    subtitle: "Stylish cafe ehair",
    price: 2500.000,
    delPrice: 3600.000
  },
  {
    id:2,
    img: "../src/assets/bath.png",
    title: "Leviosa",
    subtitle: "Stylish cafe ehair",
    price: 2500.000,

  },
  {
    id:3,
    img: "../src/assets/proimg3.png",
    title: "Lolito",
    subtitle: "Luxury big safe",
    price: 2500.000,
    delPrice: 14000
  },
  {
    id:4,
    img: "../src/assets/proimg4.png",
    title: "Respira",
    subtitle: "outdoor bar table and stool",
    price: 2500.000,

  },
  {
    id:5,
    img: "../src/assets/proimg5.png",
    title: "Grifo",
    subtitle: "Might lamp",
    price: 1500.000,

  },
  {
    id:6,
    img: "../src/assets/proimg6.png",
    title: "Muggo",
    subtitle: "Small mug",
    price: 150.000,

  },
  {
    id:7,
    img: "../src/assets/proimg7.png",
    title: "Pingky",
    subtitle: "Cute beal set",
    price: 7000.000,
    delPrice: 14000.000
  },
  {
    id:8,
    img: "../src/assets/proimg8.png",
    title: "Potty",
    subtitle: "Minimalist flower pot",
    price: 500.000,

  }
]

export const inspiration = [
  {
    id:1,
    img: "../src/assets/insp2.png",
    title: "meal place"
  },
  {
    id:2,
    img: "../src/assets/arrimg1.png",
    title: "bedroom"
  },
  {
    id:3,
    img: "../src/assets/arrimg2.png",
    title: "rest place"
  },
  {
    id:4,
    img: "../src/assets/arrimg3.png",
    title: "guest rest place"
  }
]

export const arrangement = [
  {
  val:{
      id: 1,
      img: "../src/assets/arrimg1.png",
      img1: "../src/assets/arrimg2.png",
      img2: "../src/assets/arrimg3.png",
      img3: "../src/assets/arrimg4.png",
      img4: "../src/assets/arrimg5.png",
      img5: "../src/assets/arrimg6.png",
      img6: "../src/assets/arrimg7.png",
      img7: "../src/assets/arrimg8.png",
      img9: "../src/assets/arrimg9.png"
    }
  }
]

export const ShopProducts = [
   {
    id:1,
    img: "../src/assets/proimg1.png",
    title: "Syitherine",
    subtitle: "Stylish cafe ehair",
    price: 2500.000,
    delPrice: 3600.000
  },
  {
    id:2,
    img: "../src/assets/bath.png",
    title: "Leviosa",
    subtitle: "Stylish cafe ehair",
    price: 2500.000,

  },
  {
    id:3,
    img: "../src/assets/proimg3.png",
    title: "Lolito",
    subtitle: "Luxury big safe",
    price: 2500.000,
    delPrice: 14000
  },
  {
    id:4,
    img: "../src/assets/proimg4.png",
    title: "Respira",
    subtitle: "outdoor bar table and stool",
    price: 2500.000,

  }
]

export const delivery = [
  {
    img:<FaGlassMartiniAlt className='w-20 h-8 font-semibold'/>,
    title: "High Quality",
    subtitle: "crafted from top materials"

  },
    {
    img:<HiOutlineBadgeCheck className='w-20 h-8 font-semibold'/>,
    title: "Warranty Protection",
    subtitle: "Over 2 years"

  },
    {
    img:<LiaShippingFastSolid className='w-20 h-8 font-semibold'/>,
    title: "Free Shipping",
    subtitle: "Order over 150 $"

  },
    {
    img:<MdSupportAgent className='w-20 h-8 font-semibold'/>,
    title: "24 / 7 Support",
    subtitle: "Dedicated support"

  }
]

export const sofa = [
    {
      id : 1,
      img:"../src/assets/sofa1.png"
    },
    {
      id : 2,
      img:"../src/assets/sofa2.png"
    },
    {
      id : 3,
      img:"../src/assets/sofa3.png"
    },
    {
      id : 4,
      img:"../src/assets/sofa4.png"
    }
]