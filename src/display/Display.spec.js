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
});

