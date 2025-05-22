import Sidebar from './Sidebar';
import NewProject from './NewProject';
import NoProjectSelected from './NoProjectSelected';
import { useState } from 'react';

function App() {
  let [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((preState) => {
      let newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...preState,
        projects: [...preState.projects, newProject],
      };
    });
  }
  console.log('projectState', projectState);

  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
