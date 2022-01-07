import { useState } from "react";

function Input({ onSubmitClick }) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    event.preventDefault();
    onSubmitClick(text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={text} />
      <button>+</button>
    </form>
  );
}

export default Input;
