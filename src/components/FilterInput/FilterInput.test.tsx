import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FilterInput from './FilterInput';

describe('FilterInput', () => {
  it('renders input with label', () => {
    render(<FilterInput label="Test Label" type="text" value="" onChange={() => {}} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });
});
