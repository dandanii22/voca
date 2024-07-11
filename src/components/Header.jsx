import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/dist">
        <h1>VOCA 영단어</h1>
      </Link>
      <div className="menu">
        <Link to="/create_word">단어 추가</Link>
        <Link to="/create_day">Day 추가</Link>
      </div>
    </div>
  );
};

export default Header;
