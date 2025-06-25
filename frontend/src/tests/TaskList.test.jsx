import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../TaskList";
import { test, expect, vi } from "vitest";

const tasks = [
  { text: "Task 1", completed: false },
  { text: "Task 2", completed: true },
];

test("renders tasks", () => {
  render(<TaskList tasks={tasks} toggleTaskCompletion={() => {}} />);

  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});

test("toggles task completion", () => {
  const toggleTaskCompletionMock = vi.fn();
  render(
    <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletionMock} />,
  );

  fireEvent.click(screen.getByText("Task 1"));
  expect(toggleTaskCompletionMock).toHaveBeenCalledWith(0);

  fireEvent.click(screen.getByText("Task 2"));
  expect(toggleTaskCompletionMock).toHaveBeenCalledWith(1);
});
