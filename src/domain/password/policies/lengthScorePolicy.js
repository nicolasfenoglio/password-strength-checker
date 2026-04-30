export const lengthScorePolicy = {
  id: 'length-score',

  evaluate(password) {
    const length = password.length;

    let score = 0;
    let message = '';

    if (length < 8) {
      score = 0;
      message = 'Muy corta';
    } else if (length < 12) {
      score = 2;
      message = 'Longitud mínima';
    } else if (length < 16) {
      score = 3;
      message = 'Buena longitud';
    } else if (length < 24) {
      score = 4;
      message = 'Muy buena longitud';
    } else {
      score = 5;
      message = 'Excelente longitud';
    }

    return {
      id: this.id,
      passed: length >= 8,
      message,
      weight: score, // dinámico
    };
  },
};
