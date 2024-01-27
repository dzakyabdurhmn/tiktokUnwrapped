"use client";
import { Animated, Fade } from "remotion-animated";

const Example = () => (
  <>
    <Animated
      animations={[
        Fade({ to: 1, initial: 0, start: 20 }),
        Fade({ to: 0, start: 60 }),
      ]}
    >
      <h1>Example text</h1>
    </Animated>
  </>
);

export default Example;
