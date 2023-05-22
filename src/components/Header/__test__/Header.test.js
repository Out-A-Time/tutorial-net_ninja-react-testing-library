import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const h1Element = screen.getByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
  });
});

it("should render same text passed into title prop", () => {
  render(<Header title="todo" />);
  const h1Element = screen.getByRole("heading");
  expect(h1Element).toBeInTheDocument();
});

it("should render same text passed into title prop (more specific by using name)", () => {
  render(<Header title="todo" />);
  const h1Element = screen.getByRole("heading", { name: /todo/i });
  expect(h1Element).toBeInTheDocument();
});

it("should render same text passed into title prop2", () => {
  render(<Header title="todo" />);
  const h1Element = screen.getByTitle("Header");
  expect(h1Element).toBeInTheDocument();
});

it("should render same text passed into title prop3", () => {
  render(<Header title="todo" />);
  const h2Element = screen.getByTestId("header-2");
  expect(h2Element).toBeInTheDocument();
});

// // WITH FINDBY

it("should render same text passed into title prop4", async () => {
  render(<Header title="todo" />);
  const h1Element = await screen.findByText(/todo/i);
  expect(h1Element).toBeInTheDocument();
});

// // WITH QUERYBY

it("should render same text passed into title prop5", () => {
  render(<Header title="todo" />);
  const h1Element = screen.queryByText(/dogs/i);
  //I don't expect that dogs is going to be in this document. NOT.
  expect(h1Element).not.toBeInTheDocument();
});

// // WITH GETALLBY

it("should render same text passed into title prop6", () => {
  render(<Header title="todo" />);
  const h1Elements = screen.getAllByRole("heading");
  expect(h1Elements.length).toBe(1);
});

it("should render same text passed into title prop7", () => {
  render(<Header title="todo" />);
  const h1Elements = screen.getAllByText(/todo/i);
  expect(h1Elements.length).toBe(1);
});
