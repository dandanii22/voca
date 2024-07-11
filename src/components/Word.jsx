/* eslint-disable react/prop-types */
import { useState } from "react";

// word 새로운 변수명인 w로 받음
const Word = ({ word: w }) => {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  const toggleDone = () => {
    //setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "apllication/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  if (word.id === 0) {
    return null;
  }

  const onDel = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          //id를 0으로 해주는 이유가 뭐지
          setWord({ id: 0 });
        }
      });
    }
  };
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {!isShow ? "보기" : "숨기기"}</button>
        <button className="btn_del" onClick={onDel}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default Word;
