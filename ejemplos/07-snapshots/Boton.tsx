import React from 'react';

interface IPropsBoton {
  label?: string;
  onClicker1?: () => void;
  onClicker2?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Boton: React.FC<IPropsBoton> = ({ 
  label, 
  onClicker1,
  onClicker2, 
  variant = 'primary', 
  disabled = false 
}) => {
  return (
    <>
      <button
        onClick={onClicker1}
        className={`btn btn-${variant}`}
        disabled={disabled}
        data-testid="button1"
        aria-label="buttoncito"
      >
        {label}
      </button>
      {onClicker2 && (
        <button
          onClick={onClicker2}
          className={`btn btn-${variant}`}
          disabled={disabled}
          data-testid="button2"
          aria-label="buttoncito"
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Boton;

