import React, { useState } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel, Box, SelectChangeEvent } from '@mui/material';

interface IOpcion {
  value: string;
  label: string;
}

interface IPropsEjemploMaterialUI {
  opciones?: IOpcion[];
}

const EjemploMaterialUI: React.FC<IPropsEjemploMaterialUI> = ({ opciones = [] }) => {
  const [opcionSeleccionada, establecerOpcionSeleccionada] = useState<string>('');
  const [mostrarMensaje, establecerMostrarMensaje] = useState<boolean>(false);
  const [mensajeBoton, establecerMensajeBoton] = useState<string>('');

  const manejarCambioSelect = (evento: SelectChangeEvent<string>): void => {
    const valor = evento.target.value;
    establecerOpcionSeleccionada(valor);
  };

  const manejarClickBoton = (): void => {
    establecerMostrarMensaje(true);
    establecerMensajeBoton('¡Botón clickeado exitosamente!');
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
          {opciones.map((opcion) => (
            <MenuItem key={opcion.value} value={opcion.value}>
              {opcion.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button 
        variant="contained" 
        onClick={manejarClickBoton}
        data-testid="action-button"
      >
        Click Me
      </Button>

      {mostrarMensaje && (
        <Box sx={{ mt: 2 }} data-testid="button-message">
          {mensajeBoton}
        </Box>
      )}

      {opcionSeleccionada && (
        <Box sx={{ mt: 2 }} data-testid="select-message">
          Seleccionaste la opción: {opcionSeleccionada}
        </Box>
      )}
    </Box>
  );
};

export default EjemploMaterialUI;

