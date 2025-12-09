import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EjemploMaterialUI from './EjemploMaterialUI';

interface IOpcionMock {
  value: string;
  label: string;
}

// Mock de opciones para el select (necesario para renderizar el componente)
const opcionesMock: IOpcionMock[] = [
  { value: 'option1', label: 'Opción 1' },
  { value: 'option2', label: 'Opción 2' },
  { value: 'option3', label: 'Opción 3' }
];

describe('Tests del Botón', () => {
  test('debe mostrar mensaje cuando se hace click en el botón', async () => {
    const usuario = userEvent.setup();
    render(<EjemploMaterialUI opciones={opcionesMock} />);

    // Verificar que el mensaje no está visible inicialmente
    expect(screen.queryByTestId('button-message')).not.toBeInTheDocument();

    // Obtener el botón y hacer click
    const boton = screen.getByTestId('action-button');
    await usuario.click(boton);

    // Verificar que el mensaje aparece después del click
    await waitFor(() => {
      const mensaje = screen.getByTestId('button-message');
      expect(mensaje).toBeInTheDocument();
      expect(mensaje).toHaveTextContent('¡Botón clickeado exitosamente!');
    });
  });

  test('el botón debe ser visible y clickeable', () => {
    render(<EjemploMaterialUI opciones={opcionesMock} />);

    const boton = screen.getByTestId('action-button');
    expect(boton).toBeInTheDocument();
    expect(boton).toHaveTextContent('Click Me');
  });

  test('el click del botón debe mostrar el mensaje en un div', async () => {
    const usuario = userEvent.setup();
    render(<EjemploMaterialUI opciones={opcionesMock} />);

    const boton = screen.getByTestId('action-button');
    await usuario.click(boton);

    // Verificar que el mensaje se muestra en un div
    await waitFor(() => {
      const mensajeDiv = screen.getByTestId('button-message');
      expect(mensajeDiv).toBeInTheDocument();
      expect(mensajeDiv.tagName).toBe('DIV');
      expect(mensajeDiv).toHaveTextContent('¡Botón clickeado exitosamente!');
    });
  });
});

