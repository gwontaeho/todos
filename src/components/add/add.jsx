import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux/todos/actions";
import "./add.css";

export const Add = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  useEffect(() => {
    const input = document.querySelector(".Add-input");
    input.style.animation = "";
  }, [text]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onClickAdd = useCallback(() => {
    if (!text) {
      const input = document.querySelector(".Add-input");
      input.style.animation = "translate 0.1s 3";
      setTimeout(() => {
        input.style.animation = "";
      }, 300);
      return;
    }
    dispatch(addTodo({ id: new Date().getTime(), text }));
    setText("");
  }, [text]);

  return (
    <div className="Add">
      <input
        className="Add-input"
        value={text}
        onChange={onChangeText}
        maxLength={20}
      />
      <div className="Add-button" onClick={onClickAdd}>
        추가
      </div>
    </div>
  );
};
