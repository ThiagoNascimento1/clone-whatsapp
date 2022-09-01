import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-secondary);
  padding: 0 1.5rem;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 3rem;
  }
`;

export const InputArea = styled.div`
  width: 92%;
  background-color: var(--background-primary);
  border-radius: 1rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 5rem;

  svg {
    font-size: 3rem;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  font-size: 2rem;
  `;
