import Sidebar from './Sidebar';
import NewProject from './NewProject';
import NoProjectSelected from './NoProjectSelected';
import { useState } from 'react';

function App() {
  let [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  function handleStartAddProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
