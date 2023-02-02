import { useState } from "react";

const AddTodo = (props) => {
  const [addValue, setAddValue] = useState("");
  const handleClick = () => {
    const newTodo = {
      task: addValue,
      complete: false,
    };
    props.addTodo(newTodo)
  };
  return (
    <div>
      <input
        value={addValue}
        type="text"
        onChange={(e) => setAddValue(e.target.value)}
      />
      <button onClick={handleClick}>Add todo</button>
    </div>
  );
};
export default AddTodo;
