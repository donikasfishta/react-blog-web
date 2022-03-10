import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> </span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src="https://source.coveo.com/images/illustration-full.png"
        alt=""
      />
    </div>
  );
}
