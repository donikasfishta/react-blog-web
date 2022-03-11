import Post from "../Post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {/* This returns the posts in reveres  */}
      {[...posts].reverse().map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
