import styled from "styled-components";

export const Container = styled.header`
  height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const Avatar = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  svg {
    display: inline-block;
    padding: .5rem;
    cursor: pointer;
    color: var(--icon-color);
    font-size: 4.5rem;

  }
`;