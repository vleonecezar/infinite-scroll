import styled from "styled-components";

export const Container = styled.div`
  background: white;
  padding: 10px 15px;
  max-width: 700px;
  margin: 30px 20px;
  border-radius: 8px;
  outline: 2px solid #1e90ff;
  outline-offset: -3px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);

  & + div {
    margin-top: 15px;
  }

  h2 {
    font-size: 1.1rem;
  }

  hr {
    border: 1px solid #1e90ff;
    margin: 5px 0 20px;
  }

  p {
    font-size: 0.9rem;
  }
`;
