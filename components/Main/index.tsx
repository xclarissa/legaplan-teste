// import { ToDoProps } from "@/@types/ToDoProps";
import { FaTrash } from "react-icons/fa";
import "./MainContainer.scss";
import { useState } from "react";

// interface Item {
//   id: number;
//   label: string;
// }

// interface ListProps {
//   items: Item[];
//   onDelete: (id: number) => void;
// }

export const MainContainer = () => {
  const [items, setItems] = useState([
    { id: 1, label: "Lavar as mãos" },
    { id: 2, label: "Fazer um bolo" },
    { id: 3, label: "Lavar a louça" },
  ]);

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="container-box">
        <p> Suas tarefas de hoje </p>
        <div className="container-items">
          {items.map((item) => (
            <li key={item.id} className="checklist-item">
              <input type="checkbox" id={`checkbox-${item.id}`} />
              <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-button"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
