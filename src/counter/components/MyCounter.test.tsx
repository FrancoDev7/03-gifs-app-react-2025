import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounter", () => {
  test("should render correctly", () => {
    render(<MyCounterApp />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "counter: 7"
    );
    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "reset" })).toBeDefined();
  });

  test("should increment the counter", () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const btnAdd = screen.getByRole("button", { name: "+1" });

    fireEvent.click(btnAdd);
    expect(labelH1.innerHTML).toContain("counter: 8");
  });

  test("should decrement the counter", () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const btnAdd = screen.getByRole("button", { name: "-1" });

    fireEvent.click(btnAdd);
    expect(labelH1.innerHTML).toContain("counter: 6");
  });
});
