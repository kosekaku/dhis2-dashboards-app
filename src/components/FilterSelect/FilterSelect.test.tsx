import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterSelect from './FilterSelect';
import {
  ALL_OPTION,
  MAP_OPTION,
  VISUALIZATION_OPTION,
} from '../../constants/dashboardCard';

test('Renders filter select with "VISUALIZATION" options', () => {
  const setFilter = jest.fn();
  render(<FilterSelect filter={VISUALIZATION_OPTION} setFilter={setFilter} />);

  expect(screen.getByText(VISUALIZATION_OPTION)).toBeInTheDocument();
});

test('Renders filter select with "MAP" options', () => {
  const setFilter = jest.fn();
  render(<FilterSelect filter={MAP_OPTION} setFilter={setFilter} />);

  expect(screen.getByText(MAP_OPTION)).toBeInTheDocument();
});

test('Renders filter select with "ALL" options', () => {
  const setFilter = jest.fn();
  render(<FilterSelect filter={ALL_OPTION} setFilter={setFilter} />);

  expect(screen.getByText('Filter Items')).toBeInTheDocument();
});
