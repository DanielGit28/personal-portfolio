import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Content from './components/Content/Content';

function App() {
  const [sectionView, setSectionView] = useState(false)
  return (
    <div className="App">
      <Welcome setProjectView={setSectionView}/>
      <Content sectionView={sectionView} setSectionView={setSectionView}/>

    </div>
  );
}

export default App;
