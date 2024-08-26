import React from 'react'
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbScanEye } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdDownload } from "react-icons/io";
const Navbar = () => {
  return (
    <>
    <div className="big-container">
        <b>MD<span style={{color:"purple"}}>B</span></b>
       <div style={{display:"inline-block"}} ><input className="searchbar" type="text" placeholder="search"/><IoSearch style={{color: "white", height:"20px", width: "20px", marginLeft:"10px" }} /></div> 
       <FaCartShopping style={{color:"white",height:"20px",width:"20px",marginLeft:"800px"}}/>
       <FaRegBell  style={{color:"white",height:"20px",width:"20px" ,marginLeft:"20px"}}/>
       <CgProfile  style={{color:"white",height:"20px",width:"20px",marginLeft:"20px"}}/>
       <TbScanEye  style={{color:"white",height:"20px",width:"20px",marginLeft:"20px"}} />
    </div>
    <ul className="container">
      <li style={{display:"flex",flexDirection:"row",gap:"3px"}}><span><GiHamburgerMenu style={{color:"white",paddingBottom:"5px"}} /></span>categories</li>
      <li>bestsellers</li>
      <li>inspirations</li>
      <li>blog</li>
      <li>contact</li>
      <button style={{height:"30px",width:"150px",backgroundColor:"black",color:"white"}}>Download App<IoMdDownload style={{color:"white",height:"15px",width:"15px",border:"1pxsolidwhite",marginLeft:"10px"}} /></button>
    </ul>
    </>
  )
}

export default Navbar
