import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { completedTask, ListMock } from "@/mocks/ListMock";
import { Task } from "@/@types/ToDoProps";
import "./MainContainer.scss";
import { Modal } from "../Modal";

export const MainContainer = () => {
  const [tasks, setTasks] = useState<Task[]>(ListMock);

  const [completedTasks, setCompletedTasks] = useState<Task[]>(completedTask);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleCheckboxChange = (itemId: number, isChecked: boolean) => {
    if (isChecked) {
      const completedTask = tasks.find((task) => task.id === itemId);
      if (completedTask) {
        setCompletedTasks([...completedTasks, completedTask]);
        setTasks(tasks.filter((task) => task.id !== itemId));
      }
    } else {
      const uncompletedTask = completedTasks.find(
        (completedTask) => completedTask.id === itemId
      );
      if (uncompletedTask) {
        setTasks([...tasks, uncompletedTask]);
        setCompletedTasks(completedTasks.filter((item) => item.id !== itemId));
      }
    }
  };

  const handleDeleteTask = (id: number) => {
    const task = tasks.find(item => item.id === id);
    if (task) {
      setTaskToDelete(task);
      setIsEditMode(true);
      setIsModalOpen(true);
    }
  };

  const confirmDeleteTask = () => {
    if (taskToDelete) {
      setTasks(tasks.filter((item) => item.id !== taskToDelete.id));
      setTaskToDelete(null);
      setIsModalOpen(false);
    }
  };

  const addNewTask = (newTask?: Task) => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setIsModalOpen(false);
    }
  };

  const openAddTaskModal = () => {
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  return (
    <div className="container">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={isEditMode ? confirmDeleteTask : addNewTask}
        taskLabel={taskToDelete ? taskToDelete.label : ""}
        isEditMode={isEditMode}
      />
      <div className="container-box">
        {tasks.length === 0 ? <></> : <p>Suas tarefas de hoje</p>}
        <div className="container-items">
          {tasks.map((item) => (
            <li key={item.id} className="checklist-item">
              <input
                type="checkbox"
                id={`checkbox-${item.id}`}
                onChange={(e) =>
                  handleCheckboxChange(item.id, e.target.checked)
                }
              />
              <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
              <button
                onClick={() => handleDeleteTask(item.id)}
                className="delete-button"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </div>
        <p>Tarefas finalizadas</p>
        <div className="container-items">
          {completedTasks.map((item) => (
            <li key={item.id} className="checklist-item">
              <input
                type="checkbox"
                id={`checkbox-completed-${item.id}`}
                checked
                onChange={(e) =>
                  handleCheckboxChange(item.id, !e.target.checked)
                }
              />
              <label htmlFor={`checkbox-completed-${item.id}`}>
                {item.label}
              </label>
              <button
                onClick={() => handleDeleteTask(item.id)}
                className="delete-button"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </div>
      </div>

      <button className="add-new-task" onClick={openAddTaskModal}>Adicionar nova tarefa</button>
    </div>
  );
};
