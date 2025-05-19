import Sidebar from './Sidebar';
import NewProject from './NewProject';
import NoProjectSelected from './NoProjectSelected';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
