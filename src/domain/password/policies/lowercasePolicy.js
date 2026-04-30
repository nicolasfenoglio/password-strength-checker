export const lowercasePolicy = {
  id: 'lowercase',
  weight: 2,
  evaluate(password) {
    const passed = /[a-z]/.test(password);

    return {
      passed,
      id: this.id,
      message: passed
        ? 'La contraseña contiene minúsculas'
        : 'La contraseña no contiene letras minúsculas (a-z)',
      score: passed ? 1 : 0,
    };
  },
};
