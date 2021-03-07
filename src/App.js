import React from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import User from "./components/User";
import AddNewTodo from "./components/AddNewTodo";
import Projects from "./components/Projects";
import Todos from "./components/Todos";
import EditTodo from "./components/EditTodo";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <Header>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </Header>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
