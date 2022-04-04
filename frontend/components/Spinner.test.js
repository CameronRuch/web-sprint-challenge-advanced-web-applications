// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './Spinner';


test("renders the spinner on page", () => { 
  render(<Spinner on={true} />)
  const loading = screen.queryByText(/please wait/i)
  expect(loading).toBeInTheDocument()

})

test("spinner not rendered on page", () => { 
  render(<Spinner on={false} />)
  const loading = screen.queryByText(/please wait/i)
  expect(loading).not.toBeInTheDocument()

})