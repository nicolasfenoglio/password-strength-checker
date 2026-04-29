export const hasSymbolsPolicy = {
  id: 'hasSymbols',

  evaluate(password) {
    const passed = /[!@#$%^&*(),.?":{}|<>_]/.test(password);
    return {
      id: this.id,
      passed,
      message: passed
        ? 'Contiene símbolos'
        : 'No contiene símbolos especiales como !@#$%^&*(),.?":{}|<>_',
      weight: 2,
    };
  },
};
