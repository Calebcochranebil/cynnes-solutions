import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../components/NavBar';

test('renders NavBar component', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  // Assert that the logo is rendered
  const logoElement = screen.getByAltText('Cynnes Solutions Logo');
  expect(logoElement).toBeInTheDocument();

  // Assert that the navigation links are rendered
  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();

  const quoteLink = screen.getByText('Quote');
  expect(quoteLink).toBeInTheDocument();

  const aboutLink = screen.getByText('About');
  expect(aboutLink).toBeInTheDocument();
});