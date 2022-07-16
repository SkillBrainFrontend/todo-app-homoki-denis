import React, { useState } from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import "./App.css";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

// {props.taskList.map((item, index) => (
//   <TaskCard
//     key={index}
//     id={item.id}
//     status={item.status}
//     name={item.name}
//     dueDate={item.dueDate}
//   />
// ))}

// const completedTodos = todos.filted((item) => item.completed);
// const activeTodos = todos.filted((item) => !item.completed);

// const onDelete = () => {
//   ....
//  }

//  const handleCheck = () => {
//   ....
//   }

//   const onEdit = () => {
//     ....
//   }

// return (
// <div>
//   {
//     activeTodos.map(item => (
//         <TodoItem title={item.title} description={item.description} completed={item.completed} onCheck={handleCheck} onEdit={onEdit} onDelete={onDelete} />
//       ))
//   }

//   {
//     completed.map(item => (
//         <TodoItem title={item.title} description={item.description} completed={item.completed} onCheck={handleCheck} onEdit={onEdit} onDelete={onDelete} />
//       ))
//   }
// </div>
// )

function App() {
  //states
  const [isOpen, setIsOpen] = useState(false);

  const [inputTitle, setInputTitle] = useState("");

  const [textArea, setTextArea] = useState("");

  const [createTodo, setCreateTodo] = useState([]);

  const [valid, setValid] = useState(false);

  // functions

  const openModal = function () {
    setIsOpen(!isOpen);
  };

  const onClose = function () {
    setIsOpen(!isOpen);
  };

  const inputTitleHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const textAreaHandler = (e) => {
    setTextArea(e.target.value);
  };

  const createTodoHandler = (e) => {
    e.preventDefault();
    setValid(true);
    setCreateTodo([...createTodo, inputTitle]);
    // <TodoItem inputTitle={inputTitle} textArea={textArea} completed={false} />
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* 
            This is your Create Card component.
          */}

        {/* <Modal isOpen={isOpen} onClose={onClose}> */}
        <Card>
          <h2>Create Todo</h2>
          <form>
            <Input
              placeholder="Title"
              type="text"
              onChange={inputTitleHandler}
            />
            <TextArea onChange={textAreaHandler} placeholder="Description" />
            <Button type="submit" onClick={createTodoHandler}>
              Create
            </Button>
          </form>
        </Card>
        {/* </Modal> */}

        {/* 
          My Todos
        */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={openModal}>Add +</Button>
          <div className="list-container">
            {valid
              ? createTodo.map((todos, index) => (
                  <TodoItem
                    inputTitle={inputTitle}
                    textArea={textArea}
                    completed={false}
                    setCreateTodo={setCreateTodo}
                    createTodo={createTodo}
                    key={index}
                  />
                ))
              : null}
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            <TodoItem completed={true} />
            <TodoItem completed={true} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
