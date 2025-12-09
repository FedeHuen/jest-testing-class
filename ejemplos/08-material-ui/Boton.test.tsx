import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EjemploMaterialButton } from "./EjemploMaterialButton";

describe("Tests del Botón", () => {
  test("debe mostrar mensaje cuando se hace click en el botón", async () => {
    const usuario = userEvent.setup();
    render(<EjemploMaterialButton />);

    expect(screen.queryByTestId("button-message")).not.toBeInTheDocument();

    const boton = screen.getByTestId("action-button");
    await usuario.click(boton);

    await waitFor(() => {
      const mensaje = screen.getByTestId("button-message");
      expect(mensaje).toBeInTheDocument();
      expect(mensaje).toHaveTextContent("¡Botón clickeado exitosamente!");
      expect(mensaje.tagName).toBe("DIV");
    });
  });

  test("el botón debe ser visible y clickeable", () => {
    render(<EjemploMaterialButton />);

    const boton = screen.getByTestId("action-button");
    expect(boton).toBeInTheDocument();
    expect(boton).toHaveTextContent("Click Me");
  });
});
