import React from "react";
import video from "../assets/waterfall.mp4";

const TodoHeader = () => {
  return (
    <>
      <div className="video">
        {" "}
        <div className="bg-video">
          <video autoPlay loop muted>
            <source src={video}></source>
          </video>
          <div className="heading">
            <h1>Todo List</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoHeader;
