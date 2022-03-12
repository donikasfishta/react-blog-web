import "./Single.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      {/* Post */}
      <SinglePost />
      <Sidebar />
    </div>
  );
}
