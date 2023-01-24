import React from 'react';
import { render, screen } from '@testing-library/react';
import { home } from '../';

test('renders component successfully', () => {
  render(<home />);
  const element = screen.getByTestId(/hygen/i);
  expect(element).toBeTruthy();
});