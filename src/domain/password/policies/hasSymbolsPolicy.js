export const hasSymbolsPolicy = {
  id: 'hasSymbols',
  weight: 2,
  evaluate(password) {
    const passed = /[!@#$%^&*(),.?":{}|<>_]/.test(password);
    return {
      passed,
      id: this.id,
      score: passed ? 1 : 0,
      message: passed
        ? 'La contraseña contiene símbolos especiales.'
        : 'La contraseña no contiene símbolos especiales como !@#$%^&*(),.?":{}|<>_',
    };
  },
};
