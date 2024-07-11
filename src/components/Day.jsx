import { Link, useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

const Day = () => {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h3>Day{day}</h3>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
      <Link to="/">
        <button className="backbtn">돌아가기</button>
      </Link>
    </>
  );
};

export default Day;
