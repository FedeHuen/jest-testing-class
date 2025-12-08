import React from 'react';

export const Button = ({ label, onClicker1,onClicker2, variant = 'primary', disabled = false }) => {
  return (<>
    <button
      onClick={onClicker1}
      className={`btn btn-${variant}`}
      disabled={disabled}
      data-testid="button1"
      aria-label="buttoncito"
    >
      {label}
    </button>
    <button
      onClick={onClicker2}
      className={`btn btn-${variant}`}
      disabled={disabled}
      data-testid="button1"
      aria-label="buttoncito"
    >
      {label}
    </button>
    <dialog
      open={open}
      onClose={onClose}
    >
      <h1>Hello</h1>
    </dialog>
  </>
  );
};


export default Button;

