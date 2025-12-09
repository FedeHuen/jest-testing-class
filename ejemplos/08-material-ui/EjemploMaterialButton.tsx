import { Box, Button } from "@mui/material";
import React, { Fragment, useState } from "react";

export const EjemploMaterialButton = () => {
  const [mostrarMensaje, establecerMostrarMensaje] = useState<boolean>(false);
  const [mensajeBoton, establecerMensajeBoton] = useState<string>("");
  const manejarClickBoton = (): void => {
    establecerMostrarMensaje(true);
    establecerMensajeBoton("¡Botón clickeado exitosamente!");
  };
  return (
    <Fragment>
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          onClick={manejarClickBoton}
          data-testid="action-button"
        >
          Click Me
        </Button>
      </Box>
      {mostrarMensaje && (
        <Box sx={{ mt: 2 }} data-testid="button-message">
          {mensajeBoton}
        </Box>
      )}
    </Fragment>
  );
};
