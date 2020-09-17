import styled, { keyframes, css } from 'styled-components';

function MakeRotation(frames) {
  const rotation = keyframes`
  from {
    stroke-dashoffset: 358.142;
  }

  to {
    stroke-dashoffset: frames;
  }
`;
  return rotation;
}

function CircleEffect() {
  let styles = '';

  for (let i = 0; i < 20; i += 1) {
    styles += `
    .effectRating${i} {
      animation: .233s ease-in-out ${i*1/13}s 1 slidein;
      stroke-dashoffset: 358.142;
    }`

  }
  return css`${styles}`;
}

export const CircleRatingComponent = styled.section.attrs((props) => ({
  fullCircle: props.fullCircle
}))`
  ${CircleEffect()}
  ${(props) =>
    css`
      .cirle-rating__featured {
        svg {
          circle{
            animation-name: ${MakeRotation(props.fullCircle)} !important;
          }
        }
      }
    `}
  &:hover{
    .circle__three .circle-rating__magical-number {
      color: #F36F2C;
    }
    svg {
      circle{
        stroke-dashoffset: 0 !important;
        stroke: #F36F2C !important;
      }
    }
  }
  transition: .5s;
  .circle-rating {
    float: left;
    width: 120px;
    position: relative;
    left: 50%;
    margin-left: -60px;
    margin-bottom: 30px;
  }

  .circle-rating__container {
    position: relative;
    top: 40px;
  }

  .circle-rating__magical-number {
    font-size: 3.8vw;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -26PX;
    margin-top: -21px;
    color: rgba(0, 0, 0, 0.38);
    font-weight: 300;
  }

  .circle-rating__tittle {
    font-weight: 900;
    font-size: 12px;
    display: block;
    margin-bottom: 30px;
  }

  .circle__one,
  .circle__two,
  .circle__three {
    position: absolute;
    top: 0;
  }

  .circle-rating__description {
    text-transform: uppercase;
    font-size: 1.5vw;
    width: 120px;
    letter-spacing: .3px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
    float: left;
  }

  .cirle-rating__simple {
    .circle-rating__description {
      color: rgba(0, 0, 0, 0.38);
    }
    svg{
      transform: rotate(270deg);
      circle {
        stroke: #000;
        opacity: .38;
        stroke-dashoffset: 358.142;
      }
    }
  }

  .cirle-rating__featured {
    transition: .233s;
    .circle-rating__description {
      color: #404040;
      opacity: .6;
    }
    svg{
      transform: rotate(270deg);
      circle {
        stroke: #1e88e5;
      }
    }
  }

  .circle-rating__background {
    background-color: #fff;
    opacity: .5;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: relative;
  }

  .circle-rating__background.circle__one,
  .circle-rating__background.circle__two
  {
    border: 5px solid rgba(0, 0, 0, 0.38);
  }

  .circle-rating__background.circle__three {
    border: 5px solid rgba(30,136,229, .38);
  }

  .circle__three {
    .circle-rating__magical-number {
      color: #1e88e5;
    }
  }


  @media(min-width: 980px) {
    .circle-rating__magical-number {
      font-size: 2.5vw;
      margin-left: -31PX;
      margin-top: -27px;
    }
  }

  @media(max-width: 700px) {

    .circle__container {
      height: 100px;
      width: 100%;
    }
  }

  @media(max-width: 700px) {
    .circle-rating {
      float: left;
      width: 120px;
      position: relative;
      left: 25%;
      margin-left: 0px;
      margin-bottom: 30px;
    }
    .circle-rating__description {
      width: 73px;
      font-size: 2.5vw;
    }

    .circle-rating__background {
      width: 72px;
      height: 72px;
    }
    .circle-rating__magical-number {
      font-size: 3.6vw;
      left: 45px;
      top: 45px;
    }
    .circle__container{
      svg {
        circle {
          r: 33;
          cx: 84;
          cy: 36;
        }
      }
    }
  }
  @media(max-width: 400px) {
    .circle-rating__magical-number {
      font-size: 6.5vw;
    }
    .circle-rating__description {
      font-size: 3.5vw;
    }
    .circle-rating {
      left: 7%;
    }
  }

  `
;
