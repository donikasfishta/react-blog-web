import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SidePost.css";

export default function SidePost() {
  const [posts, setPosts] = useState([]);
  const PF = "http://localhost:5000/images/";
  useEffect(() => {
    const fetchSidebar = async () => {
      const res = await axios.get("/posts/sidebar/");
      setPosts(res.data.posts);
      // console.log(res.data);
      // console.log(res.data.posts);
      // console.log(res.data.posts.title);
      console.log(res.data.posts);
    };
    fetchSidebar();
  }, []);

  return (
    <div className="side">
      <div className="side-pop">Popular Post</div>
      {posts.map((p) => (
        <Link to={`/post/${p._id}`} className="link">
          <div className="side-post ">
            <div className="side-photo">
              <img src={PF + p.photo} />
            </div>
            <div className="side-text">
              <div className="side-title">{p.title}</div>
              <div className="side-date">
                {new Date(p.createdAt).toDateString()}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
