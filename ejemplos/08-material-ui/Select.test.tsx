import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EjemploMaterialSelect } from "./EjemploMaterialSelect";

interface IOpcionMock {
  value: string;
  label: string;
}

// Mock de opciones para el select
const opcionesMock: IOpcionMock[] = [
  { value: "option1", label: "Opción 1" },
  { value: "option2", label: "Opción 2" },
  { value: "option3", label: "Opción 3" },
];

describe("Tests del Select", () => {
  test("debe renderizar el select con opciones mockeadas", async () => {
    const usuario = userEvent.setup();
    render(<EjemploMaterialSelect opciones={opcionesMock} />);

    const select = screen.getByLabelText("Selecciona una opción");

    expect(select).toBeInTheDocument();
    await usuario.click(select);
    await waitFor(async () => {
      for (const opcion of opcionesMock) {
        const elementoOpcion = await screen.findByRole("option", {
          name: opcion.label,
        });
        expect(elementoOpcion).toBeInTheDocument();
        expect(elementoOpcion).toHaveTextContent(opcion.label);
      }
    });
  });

  test("debe mostrar mensaje cuando se selecciona una opción", async () => {
    const usuario = userEvent.setup();
    render(<EjemploMaterialSelect opciones={opcionesMock} />);

    expect(screen.queryByTestId("select-message")).not.toBeInTheDocument();

    // Seleccionar una opción usando el label del select
    const select = screen.getByLabelText("Selecciona una opción");
    await usuario.click(select);

    // Esperar a que aparezcan las opciones y seleccionar una
    const opcionASeleccionar = await screen.findByRole("option", {
      name: "Opción 1",
    });
    await usuario.click(opcionASeleccionar);

    // Verificar que el mensaje aparece con la opción seleccionada
    await waitFor(() => {
      const mensaje = screen.getByTestId("select-message");
      expect(mensaje).toBeInTheDocument();
      expect(mensaje.tagName).toBe("DIV");
      expect(mensaje).toHaveTextContent("Seleccionaste la opción: option1");
    });
  });

  test("debe actualizar el mensaje cuando se selecciona una opción diferente", async () => {
    const usuario = userEvent.setup();
    render(<EjemploMaterialSelect opciones={opcionesMock} />);

    // Seleccionar primera opción
    const select = screen.getByLabelText("Selecciona una opción");
    await usuario.click(select);

    const opcion1 = await screen.findByRole("option", { name: "Opción 1" });
    await usuario.click(opcion1);

    // Verificar primera selección
    await waitFor(() => {
      expect(screen.getByTestId("select-message")).toHaveTextContent(
        "Seleccionaste la opción: option1"
      );
    });

    // Seleccionar segunda opción
    await usuario.click(select);

    const opcion2 = await screen.findByRole("option", { name: "Opción 2" });
    await usuario.click(opcion2);

    // Verificar que el mensaje se actualiza
    await waitFor(() => {
      expect(screen.getByTestId("select-message")).toHaveTextContent(
        "Seleccionaste la opción: option2"
      );
    });
  });
});
