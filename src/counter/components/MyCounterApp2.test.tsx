import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

const handleAddMock = vi.fn();
const handleSuctractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 20,
    handleAdd: handleAddMock,
    handleReset: handleResetMock,
    handleSubtract: handleSuctractMock,
  }),
}));

describe("MyCounterApp2", () => {
  test("should render the component", () => {
    render(<MyCounterApp />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "counter: 20"
    );
    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "reset" })).toBeDefined();
  });

  test("should call habdleAdd if button is clicked", () => {
    render(<MyCounterApp />);
    const btnAdd = screen.getByRole("button", { name: "+1" });
    fireEvent.click(btnAdd);
    expect(handleAddMock).toHaveBeenCalled();
    expect(handleSuctractMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });
});
