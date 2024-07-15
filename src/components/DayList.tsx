import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import React from "react";
import { IDay } from "./CreateWord";

const DayList = () => {
  const days: IDay[] = useFetch(
    "https://beryl-natural-borogovia.glitch.me/days"
  );

  if (days.length === 0) {
    return <span>Loading•••</span>;
  }

  return (
    <div>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day{day.day}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayList;
