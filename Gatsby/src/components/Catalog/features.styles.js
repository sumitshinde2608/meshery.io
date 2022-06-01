import styled from "styled-components";

const FeaturesWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media screen and (max-width: 1051px) {
    .features-container {
      flex-wrap: wrap;
    }
  }

  .feature-container {
    width: 50%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    width: 100%;
    padding: 0.5rem;
    border-radius: 20px;
    text-align: center;
    margin: 1rem auto auto auto;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 1);
  }
  .title.pattern {
    background: #00b39f;
  }
  .title.wasm {
    background: #654ff0;
  }
  .title.ebpf {
    background: #ebc017;
  }
  .title.OPA {
    background: #7d9199;
  }

  .description {
    width: 100%;
    height: 100%;
    border-left-width: 4px;
    border-left-style: solid;
    border-radius: 4px;
    bottom: 0px;
    margin-left: 1.5rem;
    margin-top: 2rem;
    padding: 1rem;
    opacity: 0;
    transition: 0.2s ease-in-out opacity;
  }
  .description.pattern {
    border-left-color: #00b39f;
  }
  .description.wasm {
    border-left-color: #654ff0;
  }
  .description.ebpf {
    border-left-color: #ebc017;
  }
  .description.opa {
    border-left-color: #7d9199;
  }
  .circlecont {
    width: 110px;
    height: 110px;
    position: relative;
    margin: 1rem auto 35px auto;
  }

  .circle {
    padding-left: 0.5rem;
    width: 110px;
    height: 110px;
    position: absolute;
    /* Mask: */
    // background-image: linear-gradient(66deg, #32ABFC 0%, #4965FA 100%);
    border-radius: 110px;
    opacity: 1;
  }

  .hover-circles .circle {
    opacity: 0.2;
    position: absolute;
    top: 0;
    background-blend-mode: multiply;
  }

  .circlecont .hover-circles .circle {
    transform: translate(0px, 0px);
    animation-fill-mode: forwards;
  }

  .feature-container:hover .description {
    opacity: 1;
  }

  .box:hover .hover-circles .circle {
    &:first-child {
      animation: 1.8s circle-1 ease-in-out infinite;
    }
    &:nth-child(2) {
      animation: 2.5s circle-2 ease-in-out infinite;
    }
    &:nth-child(3) {
      animation: 2.7s circle-3 ease-in-out infinite;
    }
    &:nth-child(4) {
      animation: 2.4s circle-4 ease-in-out infinite;
    }
    &:nth-child(5) {
      animation: 3.2s circle-5 ease-in-out infinite;
    }
  }

  @keyframes circle-1 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(15px, 15px);
    }
  }

  @keyframes circle-2 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(10px, -15px);
    }
  }

  @keyframes circle-3 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(-5px, -25px);
    }
  }

  @keyframes circle-4 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(-15px, 20px);
    }
  }

  @keyframes circle-5 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(15px, 20px);
    }
  }
`;

export default FeaturesWrapper;
