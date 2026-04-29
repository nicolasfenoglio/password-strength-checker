export const sequenceAndRepetitionPolicy = {
  id: 'sequence-repetition',

  evaluate(password) {
    const hasRepetition = hasRepeatedChars(password, 3);
    const hasSequence = hasSequentialChars(password, 4);

    const passed = !hasRepetition && !hasSequence;

    let message = 'No contiene patrones débiles';

    if (hasRepetition && hasSequence) {
      message = 'Evitá repeticiones y secuencias (ej: aaa, 1234)';
    } else if (hasRepetition) {
      message = 'Evitá repetir caracteres (ej: aaa, 111)';
    } else if (hasSequence) {
      message = 'Evitá secuencias (ej: 1234, abcd)';
    }

    return {
      id: this.id,
      passed,
      message,
      weight: 2,
    };
  },
};

function hasRepeatedChars(password, minRepeat) {
  let count = 1;

  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) {
      count++;
      if (count >= minRepeat) return true;
    } else {
      count = 1;
    }
  }

  return false;
}

function hasSequentialChars(password, minSeq) {
  let asc = 1;
  let desc = 1;

  for (let i = 1; i < password.length; i++) {
    const prev = password.charCodeAt(i - 1);
    const curr = password.charCodeAt(i);

    if (curr === prev + 1) {
      asc++;
      desc = 1;
    } else if (curr === prev - 1) {
      desc++;
      asc = 1;
    } else {
      asc = 1;
      desc = 1;
    }

    if (asc >= minSeq || desc >= minSeq) {
      return true;
    }
  }

  return false;
}
