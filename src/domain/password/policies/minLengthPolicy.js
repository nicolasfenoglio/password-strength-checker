export const minLengthPolicy = {
  id: 'min-length',

  evaluate(password) {
    const passed = password.length >= 8;

    return {
      id: this.id,
      passed,
      message: passed
        ? 'Longitud suficiente'
        : 'Debe tener al menos 8 caracteres',
      weight: 4,
    };
  },
};
