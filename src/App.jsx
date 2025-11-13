import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TodoHeader from "./components/TodoHeader";
import AddTodoValue from "./components/AddTodoValue";

import TodoListMapping from "./components/TodoListMapping";

function App() {
  const [removeTab, setRemoveTab] = useState(true);
  const [todoItems, setTodoItems] = useState(() => {
    const savedTodos = localStorage.getItem("todoItems");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editIndex, setEditItems] = useState(null);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleOnItemChange = (todoName, todoDate, priority) => {
    if (editIndex !== null) {
      const updatedItems = [...todoItems];
      updatedItems[editIndex] = { todoName, todoDate, priority };
      setTodoItems(updatedItems);
      setEditItems(null);
    } else {
      const newTodoItems = [
        ...todoItems,
        { todoName: todoName, todoDate: todoDate, priority: priority },
      ];
      setTodoItems(newTodoItems);
    }
    setRemoveTab(true);
  };

  const handleOnDeleteitem = (indexToDelete) => {
    const updateItems = todoItems.filter((_, index) => index !== indexToDelete);
    setTodoItems(updateItems);
  };

  const handleOnEditButton = (indexToEdit) => {
    console.log("Editing item at index:", indexToEdit);
    setEditItems(indexToEdit);
    setRemoveTab(false);
  };

  return (
    <>
      <TodoHeader />

      {removeTab ? (
        <AddTask setRemoveTab={setRemoveTab} />
      ) : (
        <AddTodoValue
          setRemoveTab={setRemoveTab}
          handleOnItemChange={handleOnItemChange}
          existingItem={editIndex !== null ? todoItems[editIndex] : null}
        />
      )}
      <TodoListMapping
        mappingList={todoItems}
        handleOnDeleteitem={handleOnDeleteitem}
        handleOnEditButton={handleOnEditButton}
      />
    </>
  );
}

export default App;
