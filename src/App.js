import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Notes from './Components/Notes/Notes'
import CreateNote from './Components/CreateNote/CreateNote'
function App() {
  return (
    <div className="App flex flex-row">
    <SideBar/>
    <Notes/>
    <CreateNote/>
     
    </div>
  );
}

export default App;
