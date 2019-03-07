// Test away!

import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import Controls from "./Controls";

describe("<Controls />", () => {
  describe("Gate Controls", () => {
    it("cannot be closed or opened if it is locked", () => {
      const { getByTestId } = render(<Controls closed={true} locked={true} />);
      const close = getByTestId("openCloseButton");
      const lock = getByTestId("lockUnlockButton");
      expect(close.disabled).toBe(true);
      expect(lock.disabled).toBe(false);
    });
  });
  describe("Buttons should become disabled", () => {
    it("Lock button should be disabled", () => {
      const { getByTestId } = render(
        <Controls locked={false} closed={false} />
      );
      const lockButton = getByTestId("lockUnlockButton");
      expect(lockButton).toBeDisabled();
    });
    it("Close button should be disabled", () => {
      const { getByTestId } = render(<Controls locked={true} closed={true} />);
      const closeButton = getByTestId("openCloseButton");
      expect(closeButton).toBeDisabled();
    });
    it("Both Close button and Lock Button should be disabled", () => {
      const { getByTestId } = render(<Controls locked={true} closed={false} />);
      const closeButton = getByTestId("openCloseButton");
      const lockButton = getByTestId("lockUnlockButton");
      expect(lockButton).toBeDisabled();
      expect(closeButton).toBeDisabled();
    });
  });

  describe("Buttons should become active", () => {
    it("Lock button should be enabled", () => {
        const { getByTestId } = render(
          <Controls locked={true} closed={true} />
        );
        const lockButton = getByTestId("lockUnlockButton");
        expect(lockButton).toBeEnabled();
      });
      it("Close button should be enabled", () => {
        const { getByTestId } = render(<Controls locked={false} closed={false} />);
        const closeButton = getByTestId("openCloseButton");
        expect(closeButton).toBeEnabled();
      });
      it("Both Close button and Lock Button should be enabled", () => {
        const { getByTestId } = render(<Controls locked={false} closed={true} />);
        const closeButton = getByTestId("openCloseButton");
        const lockButton = getByTestId("lockUnlockButton");
        expect(lockButton).toBeEnabled();
        expect(closeButton).toBeEnabled();
      });

  });
});
