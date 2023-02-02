import { useState } from "react";

const TodoItem = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(props.todo.task);
  const [switchValue, setSwitchValue] = useState(props.todo.complete);
  const handleSaveClick = () => {
    const editObj = {
      task: editValue,
    };
    props.editTodo(editObj, props.todo.id);
    setIsEdit(false);
  };

  const handleDeleteClick = () => {
    props.deleteTodo(props.todo.id);
  };

  const handleChangeStatus = (e) => {
    setSwitchValue(e.target.checked);
    const switchObj = {
      complete: !switchValue,
    };
    props.switchStatus(props.todo.id, switchObj);
  };

  return (
    <li>
      <input
        checked={switchValue}
        type="checkbox"
        onChange={handleChangeStatus}
      />
      {isEdit ? (
        <div>
          <input
            value={editValue}
            type="text"
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        props.todo.task
      )}
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={handleDeleteClick} className="btn_delete">
        Delete
      </button>
    </li>
  );
};
export default TodoItem;
