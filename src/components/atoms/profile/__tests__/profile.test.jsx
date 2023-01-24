import React from 'react';
import { render, screen } from '@testing-library/react';
import { profile } from '../';

test('renders component successfully', () => {
  render(<profile />);
  const element = screen.getByTestId(/hygen/i);
  expect(element).toBeTruthy();
});