import React from "react"

/*pages and components */
import NavBar from "./componets/NavBar"
import HomePage from "./pages/HomePage";
import Counter from "./componets/Counter"
import Todo from "./componets/Todo";
import TodoEdit from "./componets/Todo/TodoEdit";

/* routing */
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/editTodo/:todoId"  element={<TodoEdit />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
