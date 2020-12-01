import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <Container>
      <ListContainer>
        <TodoItem />
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default TodoList;
