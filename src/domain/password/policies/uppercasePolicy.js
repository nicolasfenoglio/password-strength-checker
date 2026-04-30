export const uppercasePolicy = {
  id: 'uppercase',
  weight: 2,
  evaluate(password) {
    const passed = /[A-Z]/.test(password);

    return {
      passed,
      id: this.id,
      message: passed
        ? 'La contraseña contiene mayúsculas'
        : 'La contraseña no contiene letras mayúsculas (A-Z)',
      score: passed ? 1 : 0,
    };
  },
};
