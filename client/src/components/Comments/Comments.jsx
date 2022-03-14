import "./Comments.css";

export default function Comments({ comments }) {
  return (
    <div className="comPart ">
      <h3 className="comTitle  ">Comments</h3>
      {comments.map((p) => (
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
