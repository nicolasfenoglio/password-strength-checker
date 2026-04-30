export const passphrasePolicy = {
  id: 'passphrase',
  weight: 5,
  evaluate(password) {
    const words = password.trim().split(/\s+/).filter(Boolean);
    const len = password.length;

    let score = 0;

    if (words.length >= 2) score += 0.3;
    if (words.length >= 3) score += 0.4;
    if (words.length >= 2 && len >= 15) score += 0.3;

    return {
      id: this.id,
      score: Math.min(score, 1),
      grow: true,
      message:
        words.length >= 3
          ? 'La contraseña es una passphrase con varias palabras.'
          : 'La contraseña no es una passphrase. Considera usar varias palabras separadas por espacios para mejorar la seguridad.',
      passed: score > 0,
    };
  },
};
