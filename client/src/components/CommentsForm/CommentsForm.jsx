import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CommentsForm.css";
import axios from "axios";

export default function CommentsForm() {
  const [user, setUser] = useState("");
  const [text, setText] = useState("");

  const location = useLocation();

  const path = location.pathname.split("/")[2];

  const handlSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      userComment: user,
      textComment: text,
    };
    console.log(newComment);
    // console.log(await axios.post(posts/comment/${path}, newComment));
    try {
      await axios.post(`/posts/comment/${path}`, newComment);
      window.location.replace("/post/" + path);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="comPart">
      <h3 className="comTitle">Leave a Reply</h3>
      <form onSubmit={handlSubmit}>
        <div className="comComents">
          <textarea
            className="comText textArea"
            placeholder="Comment"
            name="comment"
            rows="6"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="comName ">
          <input
            type="text"
            placeholder="Name"
            came="name"
            className="textArea"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="comBtn">
          <button type="submit" className="btn">
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
