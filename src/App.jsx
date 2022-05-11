import React, { useState } from 'react'
import AddTask from './components/AddTask';

import Tasks from './components/Tasks';

const App = () => {
  const [tasks] = useState([
    {
      id: "1",
      title: "Estudar",
      completed: false
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true
    }
  ]);

  return (
    <>
      <div>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;