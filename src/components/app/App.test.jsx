/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('renders App', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('colors');
    const undo = screen.getByRole('button', { name: 'Undo' });
    const redo = screen.getByRole('button', { name: 'Redo' });

    // behavior test like in lab submission
    fireEvent.change(input, { target: { value: '#0dd4db' } }); //teal
    expect(input.value).toBe('#0dd4db');//teal
    fireEvent.change(input, { target: { value: '#5f1994' } }); //purple
    expect(input.value).toBe('#5f1994'); //purple
    fireEvent.change(input, { target: { value: '#968b38' } }); //gold
    expect(input.value).toBe('#968b38'); //gold
    userEvent.click(undo);
    expect(input.value).toBe('#5f1994'); //purple
    userEvent.click(undo);
    expect(input.value).toBe('#0dd4db');//teal
    userEvent.click(redo);
    expect(input.value).toBe('#5f1994'); //purple
    fireEvent.change(input, { target: { value: '#d1d1d1' } }); //silver
    expect(input.value).toBe('#d1d1d1'); //silver
    userEvent.click(undo);
    expect(input.value).toBe('#5f1994'); //purple
    userEvent.click(undo);
    expect(input.value).toBe('#0dd4db'); //teal
    userEvent.click(redo);
    expect(input.value).toBe('#5f1994'); //purple
    userEvent.click(redo);
    expect(input.value).toBe('#d1d1d1'); //silver
    userEvent.click(redo);
    expect(input.value).toBe('#968b38'); //gold
  });
});
