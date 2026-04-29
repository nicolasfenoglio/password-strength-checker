export const hasNumbersPolicy = {
  id: 'hasNumbers',

  evaluate(password) {
    const passed = /\d/.test(password);
    return {
      id: this.id,
      passed,
      message: passed ? 'Contiene números' : 'Debe incluir al menos un número',
      weight: 3,
    };
  },
};
