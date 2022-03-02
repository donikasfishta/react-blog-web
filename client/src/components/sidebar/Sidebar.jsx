import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async () =>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[]);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://media.nkba.org/uploads/2020/11/Holiday-party-100.jpg" alt="" />

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
          {cats.map(c=>(
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
            
          ))}
          </ul>
        </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
      </div>
        
      </div>
    </div>
  )
}
