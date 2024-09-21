import { Task } from "@/@types/ToDoProps";
import { useState } from "react";
import "./modal.scss";

export const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  taskLabel,
  isEditMode,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (newTask?: Task) => void;
  taskLabel?: string;
  isEditMode: boolean;
}) => {
  const [inputValue, setInputValue] = useState(taskLabel || "");

  if (!isOpen) return null;

  const handleConfirm = () => {
    const newTask: Task = {
      label: inputValue,
      id: Date.now(),
    };
    onConfirm(isEditMode ? undefined : newTask);
    setInputValue("");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{isEditMode ? "Deletar Tarefa" : "Nova tarefa"}</h3>
        {isEditMode ? (
          <p>
            Você tem certeza que deseja deletar a tarefa:
            <br />
            {taskLabel}?
          </p>
        ) : (
          <>
            <label htmlFor="taskInput">Título:</label>
            <input
              type="text"
              id="taskInput"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </>
        )}
        <div className="button-container">
          <button className="cancel-button" onClick={onClose}>
            Cancelar
          </button>
          <button
            className={isEditMode ? "del-button" : "add-button"}
            onClick={handleConfirm}
          >
            {isEditMode ? "Deletar" : "Adicionar"}
          </button>
        </div>
      </div>
    </div>
  );
};
