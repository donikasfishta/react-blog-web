import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Comments.css";
import axios from "axios";

export default function Comments() {
  const [user, setUser] = useState([]);
  const location = useLocation();

  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get("/posts/" + path);
      setUser(res.data.comments);
    };
    fetchComments();
  }, [path]);

  return (
    <div className="comPart ">
      <h3 className="comTitle  ">Comments</h3>
      {user.map((p) => (
        <div className="comArea ">
          <p className="comText">
            <span className="p">{p.userComment}</span>
            <span className="date">{new Date(p.createdAt).toDateString()}</span>
          </p>

          <p className="comText-full ">{p.textComment}</p>
        </div>
      ))}
    </div>
  );
}
