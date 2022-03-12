import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/?q=" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  // console.log(posts);
  return (
    <>
      <Header />
      {/* <button className="btn"> */}
      {/* <form> */}
      <div className="btnHome">
        <i className="navSearchIcon fas fa-search"></i>

        <input
          type="text"
          className="input "
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* </form> */}
      {/* </button> */}
      <div className="home">
        <Posts posts={posts} />

        <Sidebar />
      </div>
    </>
  );
}
