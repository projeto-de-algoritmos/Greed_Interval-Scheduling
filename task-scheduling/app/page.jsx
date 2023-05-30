"use client";

import { useEffect, useState } from "react";

import TasksList from "@components/TasksList";
import Schedule from "@components/Schedule";
import TaskForm from "@components/TaskForm";
import intervalScheduling from "@utils/IntervalScheduling";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [results, setResults] = useState([]);
  const [gerarLista, setGerarLista] = useState(false);

  useEffect(() => {
    setResults(intervalScheduling(tasks));
    console.log(results);
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="flex flex-row justify-center">
      <div className="w-[80%] grid grid-cols-2 gap-10 mt-10 mb-10">
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          setGerarLista={setGerarLista}
        />
        <TasksList
          tasks={tasks}
          setTasks={setTasks}
          setGerarLista={setGerarLista}
        />
        {gerarLista && <Schedule results={results} />}
      </div>
    </div>
  );
}
