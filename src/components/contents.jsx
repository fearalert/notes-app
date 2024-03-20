import React, { useState } from 'react';
import './contents.css';
export default function ContentsArea(props) {
    const [data, setData] = useState({
      title: "",
      content: ""
    });
  
    function handleChange(event) {
      var { name, value } = event.target;
      setData((prevValue) => {
        return {
          ...prevValue,
          [name]: value
        };
      });
    }
  
    function submit(event) {
      event.preventDefault();
      props.onAdd(data);
      setData({
        title: "",
        content: ""
      });
    }
    return (
      <div className='contents-area'>
        <form>
          <input
            name="title"
            placeholder="Title"
            value={data.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={data.content}
            onChange={handleChange}
          />
          <button onClick={submit}>Add</button>
        </form>
      </div>
    );
  }
  