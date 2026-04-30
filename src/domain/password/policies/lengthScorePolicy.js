export const lengthPolicy = {
  id: 'length',
  weight: 4,
  evaluate(password) {
    const len = password.length;

    let score = 0;

    if (len >= 8) score = 0.3;
    if (len >= 12) score = 0.6;
    if (len >= 16) score = 0.8;
    if (len >= 24) score = 1;

    let message = '';
    if (len < 8) message = 'La contraseña es demasiado corta';
    if (len >= 8 && len < 12)
      message = 'La contraseña es de longitud aceptable';
    if (len >= 12 && len < 16) message = 'La contraseña es de buena longitud';
    if (len >= 16 && len < 24)
      message = 'La contraseña es de excelente longitud';
    if (len >= 24) message = 'La contraseña es de longitud excepcional';

    return {
      passed: score > 0,
      id: this.id,
      score,
      message,
    };
  },
};
