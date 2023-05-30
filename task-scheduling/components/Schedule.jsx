import intervalScheduling from "@utils/IntervalScheduling";
import React from "react";

const Schedule = ({ tasks }) => {
  const allSchedules = intervalScheduling(tasks);

  return (
    <div className="col-span-2 p-5 flex flex-col gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded">
      <h2 className="text-2xl font-bold">Sugestão de tarefas</h2>
      <ul className="flex flex-col gap-6">
        {allSchedules &&
          allSchedules.map((schedule, indexSchedule) => {
            return (
              <li key={indexSchedule} className="flex flex-col gap-2">
                <span>Dia {indexSchedule + 1}</span>
                <ul className="flex flex-wrap gap-5">
                  {schedule &&
                    schedule.map((task, indexTask) => {
                      return (
                        <li
                          key={indexTask}
                          className="outline outline-1 p-2 rounded"
                        >
                          <span>{task.name}</span>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Schedule;
