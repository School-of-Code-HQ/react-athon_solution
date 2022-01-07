import { useState } from "react";

import List from "../List";
import Input from "../Input";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addItem(item) {
    // Don't add the item if there is already one the same that exists
    if (todos.includes(item)) {
      return;
    }
    setTodos([...todos, item]);
  }

  function removeItem(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (
    <div className="App">
      <Input onSubmitClick={addItem} />
      <List items={todos} onItemDeleteClick={removeItem} />
    </div>
  );
}

export default App;
