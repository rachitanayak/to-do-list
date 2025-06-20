import { TasksProvider } from "../context/TasksContext";

import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

function App() {
  return (
    <TasksProvider>
      <main>
        <h1>To-do List</h1>
        <AddTask />
        <TaskList />
      </main>
    </TasksProvider>
  );
}

export default App;
