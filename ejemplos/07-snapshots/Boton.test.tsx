import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Boton from './Boton';

describe('Tests de Snapshot del Botón', () => {
  test('coincide con snapshot para botón primario', () => {
    const { asFragment } = render(
      <Boton label="Click me" onClicker1={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('coincide con snapshot para botón secundario', () => {
    const { asFragment, getAllByTestId } = render(
      <Boton onClicker1={() => {console.log('submit')}} />
    );
    const botones = getAllByTestId('button1');
    if (botones.length > 0) {
      fireEvent.click(botones[0]);
    }
    expect(asFragment()).toMatchSnapshot();
  });

  test('coincide con snapshot para botón deshabilitado', () => {
    const onClicker1 = jest.fn();
    const { getAllByTestId } = render(
      <Boton onClicker1={onClicker1} label="Click me" />
    );
    const botones = getAllByTestId('button1');
    const boton = botones[0];
    fireEvent.click(boton);

    expect(boton).toHaveAttribute('aria-label','buttoncito');
    expect(boton.innerHTML).toBe('Click me');
    expect(onClicker1).toHaveBeenCalledTimes(1);
  });
});

describe('Tests de Snapshot de Objetos', () => {
  test('objeto usuario coincide con snapshot', () => {
    const usuario = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date('2024-01-01'),
      roles: ['admin', 'user']
    };
    
    expect(usuario).toMatchSnapshot();
  });

  test('objeto configuración coincide con snapshot', () => {
    const configuracion = {
      apiUrl: 'https://api.example.com',
      timeout: 5000,
      retries: 3,
      features: {
        analytics: true,
        logging: false
      }
    };
    
    expect(configuracion).toMatchSnapshot();
  });
});

