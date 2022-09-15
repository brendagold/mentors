import './App.css';
import NavBar from './components/AppBar';
import Hero from './components/Hero';
import Mentors from './components/Mentors';
import Note from './components/Note';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Hero />
     <Note />
     <Mentors />
    </div>
  );
}

export default App;
