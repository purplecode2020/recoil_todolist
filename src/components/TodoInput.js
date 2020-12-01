import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { todosState } from "../recoil/todos";

let id = 0;
const getId = () => id++;

const TodoInput = () => {
  const setTodo = useSetRecoilState(todosState);
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (!text) {
      alert("정확한 값을 입력해주세요!");
      return;
    }

    setTodo(todos => todos.concat({ id: getId(), text, completed: false }));
    setText("");
  };

  const onKeyDown = e => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <Input
      value={text}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="할일을 입력해주세요."
      autoFocus
    />
  );
};

const Input = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);

  input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
`;

export default TodoInput;
