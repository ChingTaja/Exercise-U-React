import Sidebar from './Sidebar';
import NewProject from './NewProject';
import NoProjectSelected from './NoProjectSelected';
import SelectProject from './SelectedProject';
import { useState } from 'react';

function App() {
  let [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
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
        selectedProjectId: undefined,
        projects: [...preState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: projectState.projects.filter((project) => project.id !== projectState.selectedProjectId),
      };
    });
  }

  function handleAddTask(text) {
    setProjectState((preState) => {
      let newTask = {
        text: text,
        projectID: preState.selectedProjectId,
        id: Math.random(),
      };

      return {
        ...preState,
        tasks: [newTask, ...preState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((preState) => {
      return {
        ...preState,
        tasks: projectState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  let selectProject = projectState.projects.find((project) => projectState.selectedProjectId === project.id);
  let content = (
    <SelectProject
      project={selectProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
