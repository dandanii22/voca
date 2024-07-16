import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import React from "react";
import { IDay } from "./CreateWord";

const CreateDay = () => {
  const days: IDay[] = useFetch(
    "https://wave-thinkable-vacation.glitch.me/days"
  );

  const navigate = useNavigate();
  const addDay = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`https://wave-thinkable-vacation.glitch.me/days`, {
      method: "POST",
      headers: {
        "Content-Type": "apllication/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("단어가 추가되었습니다.");
        navigate(`/`);
      }
    });
  };
  return (
    <div>
      <h3>현재 일수 : {days.length} </h3>
      <button onClick={addDay}>Day 추가</button>
      <Link to="/">
        <button className="closebtn">취소</button>
      </Link>
    </div>
  );
};

export default CreateDay;
