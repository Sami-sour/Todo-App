import React, { useEffect, useState } from "react";
import { ImCross, ImHome3 } from "react-icons/im";

const AddTodoValue = ({ setRemoveTab, handleOnItemChange, existingItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [priority, setPriority] = useState("");
  const [emptyArr, setEmptyArr] = useState(false);

  useEffect(() => {
    if (existingItem) {
      setTodoName(existingItem.todoName);
      setTodoDate(existingItem.todoDate);
      setPriority(existingItem.priority);
    }
  }, [existingItem]);

  const handleOnClickCrossBtn = (e) => {
    e.preventDefault();
    setRemoveTab(true);
  };

  const handleOnInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleOnDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleOnPriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const onClickAddTask = (e) => {
    e.preventDefault();

    if (!todoName.trim() || !todoDate.trim() || !priority.trim()) {
      setEmptyArr(true);
      return;
    }
    setEmptyArr(false);
    handleOnItemChange(todoName, todoDate, priority);
    setRemoveTab(true);
  };

  return (
    <>
      <div className="add-todo-value">
        <div className="add-display">
          <form action="#">
            {emptyArr && (
              <h3 style={{ color: "red" }}>Please fill the empty inputs </h3>
            )}
            <ImCross className="cross-icon" onClick={handleOnClickCrossBtn} />
            <div className="form-container">
              <div className="display-tab">
                <label htmlFor="add-value">Add Value: </label>
                <br />
                <input
                  type="text"
                  className="add-input-value"
                  placeholder="Add todo items"
                  id="add-value"
                  onChange={handleOnInputChange}
                />
              </div>

              <div className="display-tab">
                <label htmlFor="add-date">Date: </label>
                <br />
                <input
                  type="date"
                  className="add-date-value"
                  id="add-date"
                  onChange={handleOnDateChange}
                />
              </div>

              <div className="display-tab">
                <label htmlFor="select-priority">Select Priority: </label>
                <br />
                <select
                  name="select"
                  id="select-priority"
                  onChange={handleOnPriorityChange}
                >
                  {" "}
                  <option value="">Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="button">
                <button className="show-add-task-btn" onClick={onClickAddTask}>
                  {existingItem ? "Save Changes" : "Add Task"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTodoValue;
