export const hasNumbersPolicy = {
  id: 'hasNumbers',
  weight: 2,
  evaluate(password) {
    const passed = /\d/.test(password);
    return {
      passed,
      id: this.id,
      score: passed ? 1 : 0,
      message: passed
        ? 'La contraseña contine números.'
        : 'La contraseña no contiene números.',
    };
  },
};
