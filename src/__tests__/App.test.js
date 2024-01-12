import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />)

  const email = screen.getByLabelText(/enter email address/i)
  const name = screen.getByLabelText(/enter name/i)

  userEvent.type(email, 'dan@email.com')
  userEvent.type(name, 'dan')

  expect(email).toHaveValue('dan@email.com')
  expect(name).toHaveValue('dan')

});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App />)

  const interests = screen.getAllByRole('checkbox')

  expect(interests).toHaveLength(3)
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App />)

  const interests = screen.getAllByRole('checkbox')

  interests.forEach((checkbox) => {
    expect(checkbox).not.toBeChecked()
  })
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App />)

  const email = screen.getByPlaceholderText(/email address/i)
  const name = screen.getByPlaceholderText(/name/i)

  userEvent.type(email, 'dan@email.com')
  userEvent.type(name, 'dan')

  expect(screen.getByDisplayValue('dan@email.com')).toBeInTheDocument()
  expect(screen.getByDisplayValue('dan')).toBeInTheDocument()
  
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App />)

  const interests = screen.getAllByRole('checkbox')

  interests.forEach((checkbox) => {
    userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App />)

  const submit = screen.getByText(/submit/i)

  userEvent.click(submit)

  expect(screen.getByText(/thank you/i)).toBeInTheDocument()
});
