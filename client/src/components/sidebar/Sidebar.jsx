import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SidePost from "../SidePost/SidePost";
import "./Sidebar.css";

export default function Sidebar({ sides }) {
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get(`/post/`);
  //     setPost(res.data);
  //   };
  //   getCats();
  // }, []);

  return (
    <div className="sidebar">
      {/* <SidePost post={posts} /> */}

      {/* {[...sides].reverse().map((p) => (
        <SidePost side={p} />
      ))} */}

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
