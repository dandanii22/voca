import { Link, useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

const Day = () => {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h3>Day{day}</h3>
      {words.length === 0 && <span>Loading•••</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
      <div className="btnwrap">
        <Link to="/create_word">
          <button className="backbtn">단어추가</button>
        </Link>
        <Link to="/">
          <button className="backbtn">돌아가기</button>
        </Link>
      </div>
    </>
  );
};

export default Day;
