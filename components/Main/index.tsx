import { ToDoProps } from "@/@types/ToDoProps";
import './MainContainer.scss'

export const MainContainer = ({ task }: ToDoProps) => {
  return (
    <div className="container">
      <p>Suas tarefas de hoje</p>
      <div className="container-item">
        <ul>
          {/* map */}
          <li>{task}</li>
        </ul>
      </div>
    </div>
  );
};
