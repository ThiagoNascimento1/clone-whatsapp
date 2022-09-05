import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

export const Image = styled.div`
  margin-bottom: 2rem;

  img {
    width: 60rem;
  }
`;

export const Title = styled.div`
  font-size: 5rem;
  font-weight: 300;
  margin-bottom: 3rem;
`;

export const Description = styled.div`
  font-size: 2rem;
  font-weight: 300;
`;

export const Info = styled.div`
  margin: 15rem 0 3rem 0;
  font-size: 2rem;
  font-weight: 300;
`;