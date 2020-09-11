import styled from 'styled-components';

const Container = styled.div`
  max-width: 90%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 0px 30px 30px 30px;
  margin: 80px auto;
  overflow: hidden;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #F36F2C;
    width: 30%;
    border: 1px solid red;
    background-color: #2D383E;
    height: 80px;
    border-radius: 5px;
    position: relative;
    top: -3px;
    justify-content: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);

    strong {
      color: #fff;
    }
    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
