import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  });

  test("should initialize with value 20", () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(initialValue);
  });

  test("should increment the counter by 1 by handleAdd", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleAdd();
    });
    expect(result.current.counter).toBe(11);
  });

  test("should decrement the counter by 1 by handleSubtract", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleSubtract();
    });
    expect(result.current.counter).toBe(9);
  });

  test("should reset the counter to initial value by handleReset", () => {
    const initialValue = 15;
    const { result } = renderHook(() => useCounter(initialValue));
    act(() => {
      result.current.handleAdd();
      result.current.handleAdd();
      result.current.handleReset();
    });
    expect(result.current.counter).toBe(initialValue);
  });
});
