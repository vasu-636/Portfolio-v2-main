import * as React from 'react';

declare module 'react-animate-on-scroll' {
  export interface ScrollAnimationProps {
    animateIn?: string;
    animateOut?: string;
    delay?: number;
    duration?: number;
    initiallyVisible?: boolean;
    animateOnce?: boolean;
    afterAnimatedIn?: (element: any) => void;
    afterAnimatedOut?: (element: any) => void;
    style?: React.CSSProperties;
    offset?: number;
    scrollableParentSelector?: string;
    className?: string;
    animatePreScroll?: boolean;
    children?: React.ReactNode;
  }
  const ScrollAnimation: React.ComponentType<ScrollAnimationProps>;
  export default ScrollAnimation;
}
