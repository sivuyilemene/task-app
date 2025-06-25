import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { test, expect } from "vitest";

test("renders Task App header", () => {
  render(<App />);
  expect(screen.getByText("Task App.")).toBeInTheDocument();
});

test("adds and toggles tasks", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Add a new task");
  const button = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Task")).toBeInTheDocument();

  fireEvent.click(screen.getByText("New Task"));
  expect(screen.getByText("New Task")).toHaveStyle(
    "text-decoration: line-through",
  );
});
