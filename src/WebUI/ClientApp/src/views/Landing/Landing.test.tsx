import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from "./Landing";

test('renders login link', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders register link', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/register/i);
  expect(linkElement).toBeInTheDocument();
});
