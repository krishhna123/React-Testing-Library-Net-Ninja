import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

describe("Todo Footer unit tests", () => {
  const MockTodoFotter = ({ numberOfIncompleteTasks }) => {
    return (
      <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
      </BrowserRouter>
    );
  };
  it("should render correct amount of incomplete tasks", async () => {
    render(<MockTodoFotter numberOfIncompleteTasks={5} />);
    const paragraphElemenet = screen.getByText(/5 tasks left/i);
    expect(paragraphElemenet).toBeInTheDocument();
  });

  it("should render correct amount of incomplete tasks", async () => {
    render(<MockTodoFotter numberOfIncompleteTasks={1} />);
    const paragraphElemenet = screen.getByText(/1 task left/i);
    expect(paragraphElemenet).toBeInTheDocument();
  });

  it("should render correct amount of incomplete tasks", async () => {
    render(<MockTodoFotter numberOfIncompleteTasks={0} />);
    const paragraphElemenet = screen.getByText(/0 tasks left/i);
    expect(paragraphElemenet).toBeInTheDocument();
  });

  it("should render correct amount of incomplete tasks and visible", async () => {
    render(<MockTodoFotter numberOfIncompleteTasks={0} />);
    const paragraphElemenet = screen.getByText(/0 tasks left/i);
    expect(paragraphElemenet).toBeVisible();
  });
});
