import styled, { keyframes, css } from 'styled-components';

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

const showing = keyframes`
  from {
    opacity: 0;
  }

  to {
     opacity: 1
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

function createCSS() {
  let styles = '';

  for (let i = 0; i < 20; i += 1) {
    styles += `
    .effect${i} {
      animation: .233s ease-in-out ${i/13}s 1 backwards;
      opacity: 1;
    }`

  }
  return css`${styles}`;
}

export const Waiting = styled.div`
  svg {
    animation: ${rotate} 2s linear infinite;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 500px;
`

export const List = styled.ul`
  list-style: none;
  overflow: hidden;
  ${createCSS()}
  ${(props) =>
    css`
      li {
        animation-name: ${showing} !important;
      }
    `}
  li {
    padding: 15px 12px 50px 12px;
    width: 23%;
    float: left;
    min-height: 174px;
    box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e8e8e8;
    margin: 30px 1%;
    border-radius: 5px;
    text-align: center;
    position: relative;
    transition: .233s;
    &:hover {
      box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.6);
    }

    .checked {
      display: none;
    }
    .contentTitle {
      height: 80px;
    }
    .title {
      font-size: 1.5vw;
      line-height: normal;
      margin-bottom: 15px;
      color: #404040;
      display: inline-block;
      font-weight: 400;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      text-align: center;
      margin-bottom: 10px;
    }
    .contentImage {
      height: 21vh;
    }
    img {
      width: 80%;
      max-width: 160px;
      min-width: 100px;
    }
    a {
      text-decoration: none;
    }

    &:first-child{
      border: 1px solid #F36F2C;
      box-shadow: 1px 10px 20px rgba(252,154,40, 0.3);
      .checked {
        position: absolute;
        right: -10px;
        top: -20px;
        display: block;
        background-color: #222;
        padding: 5px;
        border-radius: 50%;
      }

    }

    @media(max-width: 700px) {
      width: 47%;
      .title, .price, .brand {
        font-size: 2.5vw;
      }

      img {
        min-width: 74px;
      }
    }
    @media(max-width: 400px) {
      width: 47%;
      .contentImage {
        height: 10vh;
      }
      .contentTitle {
        height: 60px;
      }
      .title, .price, .brand {
        font-size: 4.5vw;
      }
    }
  }
`;
