import styled from 'styled-components';

export const Container = styled.div`
  background: #141414;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    input {
      padding: 10px 0px;
      margin: 10px 0;
    }
  }
`;
