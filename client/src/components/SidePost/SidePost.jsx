import "./SidePost.css";
import { Link } from "react-router-dom";

export default function SidePost({ side }) {
  const PF = "http://localhost:5000/images/";

  return (
    <>
      <div></div>

      <Link to={`/post/${side._id}`} className="link ">
        <div className="sidePost">
          {side.photo && (
            <img className="postImg" src={PF + side.photo} alt="" />
          )}
          <div className="postInfo">
            <div className="postCats">
              {side.categories.map((c) => (
                <span className="postCat">{c.name}</span>
              ))}
            </div>

            <span className="sidePostTitle">{side.title}</span>

            <hr />
            <span className="sidePostDate">
              {new Date(side.createdAt).toDateString()}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
