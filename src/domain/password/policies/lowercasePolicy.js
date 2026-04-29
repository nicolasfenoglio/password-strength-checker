export const lowercasePolicy = {
  id: 'lowercase',
  evaluate(password) {
    const passed = /[a-z]/.test(password);

    return {
      id: this.id,
      passed,
      message: passed
        ? 'Contiene minúsculas'
        : 'Debe incluir al menos una minúscula',
      weight: 2,
    };
  },
};
