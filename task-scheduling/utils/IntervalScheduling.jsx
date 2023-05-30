export default function intervalScheduling(tasks) {
  if (tasks.length === 0) {
    return [];
  }

  const sortedIntervals = tasks.slice().sort((a, b) => a.finish - b.finish);

  const results = [];

  while (sortedIntervals.length > 0) {
    const result = [sortedIntervals[0]];
    let lastEnd = sortedIntervals[0].finish;
    const remainingIntervals = [];

    for (let i = 1; i < sortedIntervals.length; i++) {
      const interval = sortedIntervals[i];
      if (interval.start >= lastEnd) {
        result.push(interval);
        lastEnd = interval.finish;
      } else {
        remainingIntervals.push(interval);
      }
    }

    results.push(result);
    sortedIntervals.length = 0;
    Array.prototype.push.apply(sortedIntervals, remainingIntervals);
  }

  return results;
}
