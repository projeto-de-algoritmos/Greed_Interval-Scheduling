import React from "react";

import { useForm } from "react-hook-form";

const TaskForm = ({ tasks, setTasks }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createTask = (task) => {
    const [startHour, startMinute] = task.start.split(":");
    const [finishHour, finishMinute] = task.finish.split(":");

    const startTime = new Date();
    const finishTime = new Date();

    startTime.setHours(startHour);
    startTime.setMinutes(startMinute);

    finishTime.setHours(finishHour);
    finishTime.setMinutes(finishMinute);

    const newTask = {
      name: task.name,
      start: startTime,
      finish: finishTime,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="p-5 flex flex-col gap-5 h-fit shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded">
      <h2 className="text-2xl font-bold">Adicone uma nova tarefa</h2>
      <form
        action=""
        onSubmit={handleSubmit(createTask)}
        className="grid grid-cols-2 gap-5 "
      >
        <div className="flex flex-col col-span-2">
          <label htmlFor="name">Nome da tarefa</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            {...register("name")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="start">Horário de início</label>
          <input
            type="time"
            id="start"
            name="start"
            required
            {...register("start")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="finish">Horário de termino</label>
          <input
            type="time"
            id="finish"
            name="finish"
            required
            {...register("finish")}
          />
        </div>
        <div className="flex justify-center col-span-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Adiconar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
