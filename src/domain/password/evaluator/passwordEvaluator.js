function isValidPolicy(policy) {
  return policy && typeof policy.evaluate === 'function';
}

export function evaluatePassword(password, policies) {
  const results = policies
    .filter(isValidPolicy)
    .map((p) => p.evaluate(password));

  const score = results.reduce((acc, r) => {
    return r.passed ? acc + r.weight : acc;
  }, 0);

  const maxScore = results.reduce((acc, r) => acc + r.weight, 0);

  return {
    results,
    score,
    maxScore,
    normalizedScore: maxScore === 0 ? 0 : score / maxScore,
  };
}
