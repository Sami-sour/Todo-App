import React from "react";
import ListsItems from "./ListsItems";

const TodoListMapping = ({
  mappingList,
  handleOnDeleteitem,
  handleOnEditButton,
}) => {
  return (
    <>
      {mappingList.map((mapEachTask, index) => (
        <ListsItems
          key={index}
          todoName={mapEachTask.todoName}
          todoDate={mapEachTask.todoDate}
          priority={mapEachTask.priority}
          onDelete={() => handleOnDeleteitem(index)}
          onEdit={() => handleOnEditButton(index)}
        />
      ))}
    </>
  );
};

export default TodoListMapping;
