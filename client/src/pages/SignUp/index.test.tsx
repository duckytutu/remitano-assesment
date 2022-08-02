import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from "./";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("signup-page", () => {
  test("render signup page", async () => {
    render(<SignUp />);

    const emailInput = screen.getByLabelText("Email Address *") as any;
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText("Password *") as any;
    expect(passwordInput).toBeInTheDocument();

    const confimPasswordInput = screen.getByLabelText(
      "Confirm Password *"
    ) as any;
    expect(confimPasswordInput).toBeInTheDocument();

    const signUpButton = screen.getByRole("button", {
      name: "Submit",
    });
    expect(signUpButton).toBeInTheDocument();
  });

  test("signup page - validate input", async () => {
    render(<SignUp />);

    const signUpButton = screen.getByRole("button", {
      name: "Submit",
    });

    // empty inputs
    fireEvent.click(signUpButton);
    const requiredTexts = await screen.findAllByText("Required");
    expect(requiredTexts.length).toEqual(3);
  });
});
