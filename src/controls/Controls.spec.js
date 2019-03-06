// Test away!

import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import Controls from "./Controls";

describe("<Controls />", () => {
  it("cannot be closed or opened if it is locked", () => {
    const { getByTestId } = render(<Controls closed={true} locked={true} />);
    const close = getByTestId("lockUnlockButton");
    const lock = getByTestId("openCloseButton");

    expect(close.disabled).toBe(true);
    expect(lock.disabled).toBe(false);
  });
});