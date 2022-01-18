import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header unit test", () => {
  it("should render same text passed into title prop for header component", async () => {
    render(<Header title="My Header" />);
    const headingElements = screen.getByText(/my header/i);
    expect(headingElements).toBeInTheDocument();
  });

  it("should render element based on role", async () => {
    render(<Header title="My Header" />);
    const headingElements = screen.getByRole("heading", { name: "My Header" });
    expect(headingElements).toBeInTheDocument();
  });

  it("should render element based on title", async () => {
    render(<Header title="My Header" />);
    const headingElements = screen.getByTitle("Header");
    expect(headingElements).toBeInTheDocument();
  });

  it("should render element based on test-id", async () => {
    render(<Header title="My Header" />);
    const headingElements = screen.getByTestId("header-test");
    expect(headingElements).toBeInTheDocument();
  });

  // FIND By
  it("should render same text passed into title prop for header component", async () => {
    render(<Header title="My Header" />);
    const headingElements = await screen.findByText(/my header/i);
    expect(headingElements).toBeInTheDocument();
  });

  // QueryBy

  it("should not render element which is not passed as a prop", async () => {
    render(<Header title="My Header" />);
    const headingElements = await screen.queryByText(/dog/i);
    expect(headingElements).not.toBeInTheDocument();
  });

  it("should render same text passed into title prop for header component", async () => {
    render(<Header title="My Header" />);
    const headingElements = await screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
  });
});
