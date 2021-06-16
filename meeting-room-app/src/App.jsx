import './App.css';
import Box from './components/Form/Box.jsx';
import LeftBox from './components/NavBar/LeftBox.jsx';
import RightBox from './components/Schedules/RightBox.jsx';

function App() {
  return (
    <div className="container">
      <Box />
      <LeftBox />
      <RightBox />
    </div>
  );
}

export default App;
