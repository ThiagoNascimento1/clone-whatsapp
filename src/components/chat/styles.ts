import styled from "styled-components";

export const Chat = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  background-color: var(--background-secondary);
  cursor: pointer;
  transition: all .05s linear;

  &:hover {
    background-color: var(--chat-hover);
  }
`;

export const ImgProfile = styled.div`
  padding: 0 2rem;
  height 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    color: #f00;
    width: 7rem;
    height: 7rem;
    border-radius: 3.5rem;
    background-color: #f00;
  }
`;

export const Main = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .2rem;
  border-top: .1rem solid var(--border-box);
  position: relative;
`;

export const Name = styled.div`
  font-size: 2.6rem;
`;

export const LastMenssage = styled.div`
  font-size: 2rem;
  color: #666;
`;

export const Time = styled.div`
  position: absolute;
  top: 2rem;
  right: 1rem;
  font-size: 2rem;
  color: #666;
`;