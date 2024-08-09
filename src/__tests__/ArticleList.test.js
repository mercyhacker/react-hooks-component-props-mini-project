import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

// Sample data for testing
const articles = [
  {
    id: 1,
    title: "First Article",
    date: "August 1, 2024",
    preview: "This is a preview of the first article.",
  },
  {
    id: 2,
    title: "Second Article",
    date: "August 2, 2024",
    preview: "This is a preview of the second article.",
  },
  {
    id: 3,
    title: "Third Article",
    date: "August 3, 2024",
    preview: "This is a preview of the third article.",
  },
];

test("renders a <main> element", () => {
  const { container } = render(<ArticleList articles={articles} />);
  expect(container.querySelector("main")).toBeInTheDocument();
});

test("renders an Article component for each article passed as a prop", () => {
  const { container } = render(<ArticleList articles={articles} />);
  expect(container.querySelector("main").children).toHaveLength(articles.length);
});
