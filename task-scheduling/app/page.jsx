"use client";

import { useState } from "react";

import TasksList from "@components/TasksList";
import Schedule from "@components/Schedule";
import TaskForm from "@components/TaskForm";
import intervalScheduling from "@utils/IntervalScheduling";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [gerarLista, setGerarLista] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-row  justify-center absolute">
      <div className="h-max-screen w-[80%] grid grid-cols-2 gap-10 mt-10 mb-10 relative">
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TasksList
          tasks={tasks}
          setTasks={setTasks}
          setGerarLista={setGerarLista}
        />
        {gerarLista && <Schedule tasks={tasks} />}
      </div>
    </div>
  );
}
