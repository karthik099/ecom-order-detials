import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tabs, { type Tab } from './Tabs';

describe('Tabs', () => {
  const tabs: Tab[] = [
    { label: 'Tab 1', value: 'tab1' },
    { label: 'Tab 2', value: 'tab2' },
  ];
  it('renders tab labels', () => {
    render(<Tabs tabs={tabs} activeTab="tab1" onTabChange={() => {}} />);
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
  });
});
