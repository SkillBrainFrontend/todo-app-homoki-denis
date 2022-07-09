import React, { useState } from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
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

function App() {
  // functions
  const titleInput = (e) => {
    setTitleInputState(e.target.value);
    console.log(`title: ${e.target.value}`);
  };

  const descInput = (e) => {
    setDescInputState(e.target.value);
    console.log(`desc: ${e.target.value}`);
  };

  const submitForm = () => {};

  //states
  const [titleInputState, setTitleInputState] = useState("");
  const [descInputState, setDescInputState] = useState("");

  return (
    <div className="App">
      <div className="app-container">
        {/* 
            This is your Create Card component.
          */}
        <Card>
          <h2>Create Todo</h2>
          <form onSubmit={""}>
            <Input onChange={titleInput} placeholder="Title" type="text" />
            <TextArea onChange={descInput} placeholder="Description" />
            <Button type="submit">Create</Button>
          </form>
        </Card>

        {/* 
          My Todos
        */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={() => console.log("Open Modal")}>Add +</Button>
          <div className="list-container">
            <TodoItem completed={false} />

            <TodoItem completed={false} />
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
