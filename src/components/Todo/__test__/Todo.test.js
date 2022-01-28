import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

describe("Header unit test", () => {
  it("should able to add task and validate list", async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButton = screen.getByRole("button", { name: /Add/i });
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "Go Shopping" } });
    fireEvent.click(addButton);
    const divElement = screen.getByText(/Go Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should able to add multiple tasks and validate list", async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButton = screen.getByRole("button", { name: /Add/i });
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "Go Shopping" } });
    fireEvent.click(addButton);
    fireEvent.change(inputElement, {
      target: { value: "Go Shopping 1" },
    });
    fireEvent.click(addButton);
    fireEvent.change(inputElement, {
      target: { value: "Go Shopping 2" },
    });
    fireEvent.click(addButton);
    const divElements = screen.getAllByTestId("taks-container");
    expect(divElements.length).toBe(3);
  });
});
