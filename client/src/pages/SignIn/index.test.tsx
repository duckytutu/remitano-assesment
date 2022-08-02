import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SignIn from "./";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("signin-page", () => {
  test("render signin page", async () => {
    render(<SignIn />);

    const emailInput = screen.getByLabelText("Email Address *") as any;
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText("Password *") as any;
    expect(passwordInput).toBeInTheDocument();

    const signInButton = screen.getByRole("button", {
      name: "Sign In",
    });
    expect(signInButton).toBeInTheDocument();
  });

  test("signin page - validate input", async () => {
    render(<SignIn />);

    const signInButton = screen.getByRole("button", {
      name: "Sign In",
    });

    // empty inputs
    fireEvent.click(signInButton);
    const requiredTexts = await screen.findAllByText("Required");
    expect(requiredTexts.length).toEqual(2);
  });
});
