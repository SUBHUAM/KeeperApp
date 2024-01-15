import React, { useState } from "react";
import Note from "./Note";
function CreateArea() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [itemsT, setItemsT] = useState([]);
  const [itemsC, setItemsC] = useState([]);

  function changeTitle(event) {
    const { value } = event.target;
    setTitle(value);
  }
  function changeText(event) {
    const { value } = event.target;
    setText(value);
  }

  function submit(event) {
    setItemsT((prevalue) => {
      return [...prevalue, title];
    });
    setItemsC((prevalue) => {
      return [...prevalue, text];
    });
    setTitle("");
    setText("");
    event.preventDefault();
  }

  function deleting(id) {
    setItemsT((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    setItemsC((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={changeTitle}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={changeText}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text}
        />
        <button>Add</button>
      </form>
      {itemsT.map((items, index) => {
        return (
          <Note
            id={index}
            title={items}
            content={itemsC[index]}
            delete1={deleting}
          />
        );
      })}
    </div>
  );
}

export default CreateArea;
