import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Função para adicionar uma tarefa
  const addTask = () => {
    if (task) {
      const currentTime = new Date().toLocaleTimeString();  // Pega o horário atual
      const newTask = { task, time: currentTime };  // Armazena a tarefa e o horário
      setTasks([...tasks, newTask]);
      setTask(""); // Limpa o campo de entrada
    }
  };

  // Função para remover uma tarefa
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Lista de suas Tarefas Diárias</h1>

      {/* Campo de entrada e botão para adicionar tarefa */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicione uma tarefa"
      />
      <button onClick={addTask}>Adicionar</button>

      {/* Exibe a lista de tarefas */}
      <ul>
        {tasks.map((taskItem, index) => (
          <li key={index}>
            {taskItem.task} <span>({taskItem.time})</span>  {/* Exibe o horário da tarefa */}
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
