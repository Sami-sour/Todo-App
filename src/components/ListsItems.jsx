import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const ListsItems = ({
  todoName,
  todoDate,
  priority,
  onDelete,

  onEdit,
}) => {
  const getPriorityColor = () => {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "rgb(29, 51, 97)";
    }
  };

  return (
    <div className="lists-items">
      <div
        className="list-section"
        style={{
          backgroundColor: getPriorityColor(),
        }}
      >
        <div className="text-area">
          <textarea
            name="items-value"
            id="items-value"
            defaultValue={todoName}
            style={{
              backgroundColor: getPriorityColor(),
            }}
          ></textarea>
        </div>
        <div className="item-date">
          <div className="dates">{todoDate}</div>
        </div>

        <div className="add-priority">
          <div className="priority">{priority}</div>
        </div>

        <div className="edit-icon">
          <button
            className="edit-btn"
            style={{
              backgroundColor: getPriorityColor(),
            }}
          >
            {" "}
            <FiEdit className="edit" onClick={onEdit} />
          </button>
        </div>

        <div className="delete">
          <button
            className="delete-btn"
            style={{
              backgroundColor: getPriorityColor(),
            }}
          >
            <MdDelete className="delete" onClick={onDelete} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListsItems;
