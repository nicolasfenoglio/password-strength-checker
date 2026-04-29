export const uppercasePolicy = {
  id: 'uppercase',

  evaluate(password) {
    const passed = /[A-Z]/.test(password);

    return {
      id: this.id,
      passed,
      message: passed
        ? 'Contiene mayúsculas'
        : 'Debe incluir al menos una mayúscula',
      weight: 2,
    };
  },
};
