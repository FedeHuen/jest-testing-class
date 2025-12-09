import React from "react";

interface IPropsBoton {
  label?: string;
  onClicker1?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Boton: React.FC<IPropsBoton> = ({
  label,
  onClicker1,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <>
      <button
        onClick={onClicker1}
        className={`btn btn-${variant}`}
        disabled={disabled}
        data-testid="button1"
        aria-label="buttoncito"
        style={{
          backgroundColor: "red",
        }}
      >
        {label}
      </button>
    </>
  );
};

export default Boton;
