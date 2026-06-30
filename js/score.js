
export function getScore(pos, percent, percentToQualify) {
  if (percent < PercentToQualify) return 0;

  let maxPoints = 350 * Math.pow(0.97, pos - 1)

  if (percent === 100) {
    return Math.round(maxPoints);
  } else {
    let percentRation = (percent - percentToQualify) / (100 - percentToQualify;
    let pointsAtMin = maxPoints * 0.20;
    let finalPoints = ponintsAtMin + (maxPoints - pointsAtMin) * percentRatio;
    return Math.round(finalPoints);
  }
}

