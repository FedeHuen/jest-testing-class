import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  SelectChangeEvent,
} from "@mui/material";

interface IOpcion {
  value: string;
  label: string;
}

interface IPropsEjemploMaterialUI {
  opciones?: IOpcion[];
}

export const EjemploMaterialSelect: React.FC<IPropsEjemploMaterialUI> = ({
  opciones,
}: IPropsEjemploMaterialUI) => {
  const [opcionSeleccionada, establecerOpcionSeleccionada] =
    useState<string>("");

  const manejarCambioSelect = (evento: SelectChangeEvent<string>): void => {
    const valor = evento.target.value;
    establecerOpcionSeleccionada(valor);
  };

  return (
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="select-label">Selecciona una opción</InputLabel>
        <Select
          labelId="select-label"
          id="select-option"
          value={opcionSeleccionada}
          label="Selecciona una opción"
          onChange={manejarCambioSelect}
          data-testid="select-option"
        >
          {opciones?.map((opcion) => (
            <MenuItem key={opcion.value} value={opcion.value}>
              {opcion.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {opcionSeleccionada && (
        <Box sx={{ mt: 2 }} data-testid="select-message">
          Seleccionaste la opción: {opcionSeleccionada}
        </Box>
      )}
    </Box>
  );
};
