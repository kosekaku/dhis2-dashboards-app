import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/DHIS2 Dashboards/1h);
  expect(linkElement).toBeInTheDocument();
});
