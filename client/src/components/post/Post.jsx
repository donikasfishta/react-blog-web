import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={post.photo} width="700px" alt="" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCats">{c.name}</span>
          ))}
        </div>
        {/* when we click on post it will go to that post */}
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
