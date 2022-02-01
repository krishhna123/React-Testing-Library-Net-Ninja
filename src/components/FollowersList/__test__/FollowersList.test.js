import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

describe("Follower list tests", () => {
  const MockFollowersList = () => {
    return (
      <BrowserRouter>
        <FollowersList />
      </BrowserRouter>
    );
  };

  it("Followers list test", async () => {
    render(<MockFollowersList />);
    const followrDivElement = await screen.findAllByTestId(/follower-item/i);
    expect(followrDivElement.length).toBe(5);
  });
});
