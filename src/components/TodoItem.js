import React from "react";
import styled, { css } from "styled-components";
import { useSetRecoilState } from "recoil";
import { todosState } from "../recoil/todos";

const TodoItem = ({ data }) => {
  const setTodos = useSetRecoilState(todosState);

  const toggleTodo = () => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === data.id ? { ...data, completed: !data.completed } : todo
      )
    );
  };

  const removeTodo = () => {
    setTodos(todos => todos.filter(todo => todo.id !== data.id));
  };

  return (
    <Container completed={data.completed}>
      <ToggleButton type="checkbox" onClick={toggleTodo} />
      <Text>{data.text}</Text>
      <DestroyButton onClick={removeTodo}>X</DestroyButton>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  :last-child {
    border-bottom: none;
  }

  ${({ completed }) =>
    completed &&
    css`
      color: #d9d9d9;
      text-decoration: line-through;
    `}
`;

const ToggleButton = styled.input`
  width: 40px;
  height: 40px;
`;

const Text = styled.label`
  word-break: break-all;
  padding: 15px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
`;

const DestroyButton = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  transition: color 0.2s ease-out;
  cursor: pointer;
  color: #af5b5e;
`;

export default TodoItem;
