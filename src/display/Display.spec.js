// Test away!

import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display />", () => {
  it("defaults to unlocked and open", () => {
    const { getByText } = render(<Display />);
    const lock = getByText(/unlocked/i).textContent;
    const close = getByText(/open/i).textContent;
    expect(lock).toBeTruthy();
    expect(close).toBeTruthy();
  });

  it("displays 'Closed' if the closed prop is true and 'Open' if otherwise. Part 1 of 2", () => {
    const { getByText } = render(<Display closed={true} />);
    const close = getByText(/closed/i).textContent;
    expect(close).toBeTruthy();
  });

  it("displays 'Closed' if the closed prop is true and 'Open' if otherwise. Part 2 of 2", () => {
    const { getByText } = render(<Display closed={false} />);
    const close = getByText(/open/i).textContent;
    expect(close).toBeTruthy();
  });

  it("displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise. Part 1 of 2", () => {
    const { getByText } = render(<Display locked={true} />);
    const lock = getByText(/locked/i).textContent;
    expect(lock).toBeTruthy();
  });

  it("displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise. Part 2 of 2", () => {
    const { getByText } = render(<Display locked={false} />);
    const lock = getByText(/unlocked/i).textContent;
    expect(lock).toBeTruthy();
  });

  it("when locked or closed use the red-led class. Part 1 of 2", () => {
    const { getByTestId } = render(<Display locked={true} />);
    const lock = getByTestId("lockUnlock");
    expect(lock).toHaveClass("red-led");
  });

  it("when locked or closed use the red-led class. Part 2 of 2", () => {
    const { getByTestId } = render(<Display closed={true} />);
    const close = getByTestId("openClose");
    expect(close).toHaveClass("red-led");
  });

  it("when unlocked or open use the green-led class. Part 1 of 2", () => {
    const { getByTestId } = render(<Display locked={false} />);
    const lock = getByTestId("lockUnlock");
    expect(lock).toHaveClass("green-led");
  });

  it("when unlocked or open use the green-led class. Part 2 of 2", () => {
    const { getByTestId } = render(<Display closed={false} />);
    const close = getByTestId("openClose");
    expect(close).toHaveClass("green-led");
  });


});
