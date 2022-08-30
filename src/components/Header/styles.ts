import styled from "styled-components";

export const Container = styled.header`
  heigth: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
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
  align-items: center;
  justify-content: center;

  svg {
    color: #919191;
    font-size: 3rem;

  }
`;