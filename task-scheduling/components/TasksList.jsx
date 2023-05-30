"use client";

const TasksList = ({ tasks, setTasks, setGerarLista }) => {
  const deleteTask = (task) => {
    const updatedItems = tasks.filter((item) => item !== task);
    setTasks(updatedItems);
    setGerarLista(false);
  };

  return (
    <div className="p-5 flex flex-col gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded flex-wrap">
      <h2 className="text-2xl font-bold col-span-3">Lista de tarefas</h2>
      <ul className="grid grid-cols-3 gap-5">
        {tasks &&
          tasks.map((task, index) => {
            return (
              <li
                key={index}
                className="outline outline-1 p-1 rounded flex flex-col flex-wrap"
              >
                <div className="flex justify-end flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 cursor-pointer text-red-500"
                    onClick={() => deleteTask(task)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <span>{task.name}</span>
                <div className="flex gap-2 flex-wrap">
                  <span>
                    {task.start.toLocaleTimeString(undefined, {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    })}
                  </span>
                  <span>-</span>
                  <span>
                    {task.finish.toLocaleTimeString(undefined, {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    })}
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
      {tasks.length > 0 && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setGerarLista(true)}
        >
          Gerar Lista
        </button>
      )}
    </div>
  );
};

export default TasksList;
