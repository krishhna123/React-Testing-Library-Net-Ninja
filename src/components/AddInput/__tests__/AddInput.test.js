import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput unit tests", () => {
  it("should render input element", () => {
    render(<AddInput todo={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "shopping" } });
    expect(inputElement.value).toBe("shopping");
  });

  it.skip("should have empty input when add button is clicked", async () => {
    render(<AddInput todo={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButton = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "go shopping" } });
    fireEvent.click(addButton);

    expect(inputElement.value).toBe("go shopping");
  });
});
