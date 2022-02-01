import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const addButton = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(addButton);
  });
};

describe("Header unit test", () => {
  it("should able to add task and validate list", async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    addTasks(["Go Shopping"]);
    const divElement = screen.getByText(/Go Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should able to add multiple tasks and validate list", async () => {
    render(<MockTodo />);
    addTasks(["Go to shopping", "go to shopping 2", "go to shopping 3"]);
    const divElements = screen.getAllByTestId("taks-container");
    expect(divElements.length).toBe(3);
  });

  it("task should not have completed class when initially rendered", async () => {
    render(<MockTodo />);
    addTasks(["Go to shopping"]);
    const divElement = screen.getByText(/Go to shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should  have completed class when completed", async () => {
    render(<MockTodo />);
    addTasks(["Go to shopping"]);
    const divElement = screen.getByText(/Go to shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
