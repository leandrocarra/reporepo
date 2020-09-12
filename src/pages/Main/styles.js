import styled, { keyframes, css } from 'styled-components';
import { FaCheck } from 'react-icons/fa';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #F36F2C;
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
  background: #F36F2C;
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
    height: 35vh;
    box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e8e8e8;
    margin: 30px 1%;
    border-radius: 5px;
    text-align: center;
    position: relative;

    .checked {
      display: none;
    }

    p {
      font-size: 1.5vw;
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
      width: 80%;
      max-width: 160px;
      min-width: 130px;
    }

    &:first-child{
      padding: 20px;
      border: 1px solid #F36F2C;
      width: 50%;
      margin: 30px 0;
      clear: both;
      text-align: left;
      box-shadow: 1px 10px 20px rgba(252,154,40, 0.3);
      float: left;
      min-height: 23vh;
      height: auto;
      max-height: 35vh;

      .checked {
        position: absolute;
        right: -10px;
        top: -20px;
        display: block;
        background-color: #222;
        padding: 5px;
        border-radius: 50%;
      }

      p {
        float: right;
        width: 40%;
        font-size: 1.8vw;
      }

      div {
        float: left;
        text-align: left;
        margin-bottom: 10px;
        overflow: hidden;
        width: 60%;
      }

      img {
        width: 80%;
        max-width: 250px;
        min-width: 130px;
      }
    }

    a {
      text-decoration: none;
    }

  }
  @media(max-width: 890px) {
    li {
      height: 21vh;
      img {
        width: 60%;
        max-width: auto;
        min-width: auto;
      }

      &:first-child{
        min-height: 20vh;
        img {
          width: 60%;
          max-width: auto;
          min-width: auto;
        }
      }
    }
  }
`;
