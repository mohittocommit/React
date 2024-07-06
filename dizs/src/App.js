import { useApi } from './api';
import endPoints from './api/apiEndpoints';
import './App.css';
import { icons } from './utils/icons';

function App() {
  const getProfileData = async () => {
    const response = await useApi.profile();
  }
  const addBlog = async () => {
    const payload = {
      title: "blog 1"
    }
    const response = await useApi.create(endPoints.addBlog, payload);
  }
  return (
    <div className="App">
      <h1>App Component</h1>
      <img src={icons.logo} />
      <button onClick={getProfileData}></button>
    </div>
  );
}

export default App;
