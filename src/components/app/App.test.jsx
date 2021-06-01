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

    fireEvent.change(input, { target: { value: '#FF0000' } });
    expect(input.value).toBe('#ff0000');
    fireEvent.change(input, { target: { value: '#FF69B4' } });
    expect(input.value).toBe('#ff69b4');
    userEvent.click(undo);
    expect(input.value).toBe('#ff0000');
    userEvent.click(redo);
    expect(input.value).toBe('#ff69b4');
  });
});