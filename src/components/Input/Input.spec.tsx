import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

const propTests: any = {
  label: 'test-label',
};

describe('<Input>', () => {
  it('ver input', () => {
    render(<Input {... propTests} />);

    screen.getByText('test-label');
  });
});
