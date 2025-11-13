// import React, { useState } from "react";

const AddTask = ({ setRemoveTab }) => {
  const handleAddBtn = () => {
    setRemoveTab(false);
  };

  return (
    <div className="container">
      <div className="main-container">
        <div className="addtask-container">
          <p className="todo-thought">Don't make a wishlist make a Todo List</p>
          <div className="add-task">
            <button className="add-btn" onClick={handleAddBtn}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
