import { render, screen, fireEvent } from "@testing-library/react";
import TaskInput from "../TaskInput";
import { test, expect, vi } from "vitest";

test("renders input and button", () => {
  render(<TaskInput addTask={() => {}} />);

  expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
  expect(screen.getByText("Add Task")).toBeInTheDocument();
});

test("adds task on submit", () => {
  const addTaskMock = vi.fn();
  render(<TaskInput addTask={addTaskMock} />);

  const input = screen.getByPlaceholderText("Add a new task");
  const button = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(addTaskMock).toHaveBeenCalledWith("New Task");
  expect(input.value).toBe("");
});
