import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Snapshot Tests', () => {
  test('matches snapshot for primary button', () => {
    const { asFragment } = render(
      <Button label="Click me" onClick={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot for secondary button', () => {
    const { asFragment ,getByTestId} = render(
      <Button onClick={() => {console.log('submit')}} />
    );
    fireEvent.click(getByTestId('button1'));
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot for disabled button', () => {
    const onClicker1 = jest.fn();
    const { getByTestId, queryByAltText } = render(
      <Button onClicker1={onClicker1} label="Click me" />
    );
    // const button = getByTestId('button1');
    const button = getByTestId('button1');
    fireEvent.click(button);

    // expect(button).toHaveAttribute('disabled');
    // expect(button.innerHTML).toBe('click me');
    // expect(button).toHaveTextContent('Click me');
    expect(button).toHaveAttribute('aria-label','buttoncito');
    expect(button.innerHTML).toBe('Click me');
    expect(onClicker1).toHaveBeenCalledTimes(1);
    
  });
});

describe('Object Snapshot Tests', () => {
  test('user object matches snapshot', () => {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date('2024-01-01'),
      roles: ['admin', 'user']
    };
    
    expect(user).toMatchSnapshot();
  });

  test('configuration object matches snapshot', () => {
    const config = {
      apiUrl: 'https://api.example.com',
      timeout: 5000,
      retries: 3,
      features: {
        analytics: true,
        logging: false
      }
    };
    
    expect(config).toMatchSnapshot();
  });
});

