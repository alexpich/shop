import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: all 0.4s;
    backface-visibility: hidden;
  }

  .count-enter {
    transform: scale(3) rotateX(0.5turn);
  }

  .count-enter-active {
    transform: rotateX(0);
  }

  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }

  .count-exit-active {
    transform: scale(3) rotateX(0.5turn);
  }
`;

const Circle = styled.div`
  background: ${(props) => props.theme.blue};
  color: #fff;
  border-radius: 50%;
  padding: 1rem;
  line-height: 1.1rem;
  min-width: 3rem;
  margin-left: 1rem;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  font-weight: 600;
`;

const BagCount = ({ count }) => (
  <AnimationStyles>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        key={count}
        timeout={{ enter: 400, exit: 400 }}
      >
        <Circle>{count}</Circle>
      </CSSTransition>
    </TransitionGroup>
  </AnimationStyles>
);

export default BagCount;
