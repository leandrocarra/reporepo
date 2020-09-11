import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #FC9A28;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
     transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #FC9A28;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  overflow: hidden;

  li {
    padding: 12px;
    width: 23%;
    float: left;
    height: 60vh;
    box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e8e8e8;
    margin: 30px 1%;
    border-radius: 5px;
    text-align: center;

    p {
      font-size: 20px;
      line-height: normal;
      margin-bottom: 15px;
      color: #404040;
      display: inline-block;
      font-weight: 400;
    }

    div {
      text-align: center;
      margin-bottom: 10px;
    }

    img {
      max-width: 80%;
    }

    &:first-child{
      padding: 20px;
      border: 1px solid #FC9A28;
      width: 100%;
      margin: 30px 0;
      clear: both;
      text-align: left;
      box-shadow: 1px 10px 20px rgba(252,154,40, 0.3);
      height:35vh;
      float: left;

      div {
      float: left;
      text-align: left;
      margin-bottom: 10px;
      margin-right: 50px;
      overflow: hidden;
    }
      img {
        max-width: 250px;
      }
    }

    /* & + li {
      border-top: 1px solid #eee;
    } */

    a {
      color: #7159c1;
      text-decoration: none;
    }

  }
`;
