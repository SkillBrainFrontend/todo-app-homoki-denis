import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {
  const handleCheckboxChange = (value) => {
    // console.log(value);
  };

  const deleteToDo = () => {
    props.setCreateTodo(props.createTodo.filter((t) => t !== props.inputTitle));
  };

  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={!!props.completed}
            onChange={handleCheckboxChange}
          />

          <h4>{props.inputTitle}</h4>
        </div>
        <div>
          <i className="fa fa-pencil" aria-hidden="true"></i>
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={deleteToDo}
          ></i>
        </div>
      </div>

      <div className="separator"></div>

      <p>{props.textArea}</p>
    </div>
  );
};

export default TodoItem;
