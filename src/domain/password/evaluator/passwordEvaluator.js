function isValidPolicy(policy) {
  return policy && typeof policy.evaluate === 'function';
}

export function evaluatePassword(password, policies) {
  const validPolicies = policies.filter(isValidPolicy);

  if (!password || typeof password !== 'string') {
    return {
      results: [],
      score: 0,
      maxScore: validPolicies.reduce((acc, p) => acc + (p.weight || 0), 0),
      normalizedScore: 0,
    };
  }

  const results = validPolicies.map((p) => {
    const result = p.evaluate(password);

    return {
      ...result,
      weight: p.weight ?? 1, // se inyecta acá
    };
  });

  const score = results.reduce((acc, r) => {
    return acc + r.score * r.weight;
  }, 0);

  const maxScore = results.reduce((acc, r) => acc + r.weight, 0);

  return {
    results,
    score,
    maxScore,
    normalizedScore: maxScore === 0 ? 0 : score / maxScore,
  };
}
