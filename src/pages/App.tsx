import { TasksProvider } from "../context/TasksContext";

import "../css/App.scss";

import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

function App() {
  const date = new Date();
  return (
    <TasksProvider>
      <main className="page-wrapper">
        <h1 className="page__title">
          Todos for the day ({date.toLocaleDateString()})
        </h1>
        <AddTask />
        <TaskList />
      </main>
    </TasksProvider>
  );
}

export default App;
