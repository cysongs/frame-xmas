/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  const counter = ctx.pressedButton
    ? ctx.searchParams.value === "+"
      ? ++ctx.state.counter
      : --ctx.state.counter
    : ctx.state.counter;

  return {
    image: (
      <span>
        {ctx.pressedButton
          ? `count ${counter}`
          : `Click some button`}
      </span>
    ),
    buttons: [
      <Button action="post" target={{ query: { value: "+" } }}>
        Increment
      </Button>,
      <Button action="post" target={{ query: { value: "-" } }}>
        Decrement
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;