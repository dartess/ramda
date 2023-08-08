function isRecordOrArray(object) {
  return typeof object === 'object' && object !== null;
}

function deepMerge(a, b) {
  if (
    typeof a !== 'object' ||
    typeof b !== 'object' ||
    a === null ||
    b === null
  ) {
    return a !== undefined && a !== null ? a : b;
  }
  if (Array.isArray(a)) {
    if (Array.isArray(b)) {
      return a.concat(b);
    }
    return a;
  }
  if (Array.isArray(b)) {
    return a;
  }
  if (Array.isArray(b)) {
    return a;
  }

  const output = { ...b, ...a };

  for (const k in b) {
    const aValue = a[k];
    const bValue = b[k];

    if (isRecordOrArray(aValue) && isRecordOrArray(bValue)) {
      output[k] = deepMerge(aValue, bValue);
    }
  }
  return output;
}

module.exports.deepMerge = deepMerge;
