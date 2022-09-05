import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--background-primary);
  display: flex;
`;

export const NavSide = styled.div`
  width: 35%;
  height: 100vh;
  max-width: 615px;
  border: .1rem solid var(--border-box);
`;

export const ChatList = styled.div`
  overflow-y: scroll;
  height: calc(100% - 16rem);
  background-color: var(--background-secondary);

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(206, 208, 209, 1);
    display: block;
  }
`;

export const ChatActive = styled.div`
  width: 75%;
`;