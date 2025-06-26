import { TasksProvider } from "../context/TasksContext";

import "../css/App.scss";

import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

function App() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-us", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <TasksProvider>
      <main className="page-wrapper">
        <h1 className="page__title">Todos for the day ({formattedDate})</h1>
        <AddTask />
        <TaskList />
      </main>
    </TasksProvider>
  );
}

export default App;
