import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 32rem;
  height: 48rem;

  position: relative;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 6rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
