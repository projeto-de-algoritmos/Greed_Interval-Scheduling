export default function intervalScheduling(tasks) {
  const sortedTasks = [...tasks];
  sortedTasks.sort((a, b) => a.finish - b.finish);

  let allSchedules = [];

  while (sortedTasks.length > 0) {
    let selectedIntervals = [];
    let lastEndTime = -Infinity;  

    for (const task of sortedTasks) {
      if (task.start >= lastEndTime) {
        selectedIntervals.push(task);
        lastEndTime = task.finish;
        let index = sortedTasks.indexOf(task);
        sortedTasks.splice(index, 1)
      }
    }

    allSchedules.push(selectedIntervals);
  }

  return allSchedules;
}
