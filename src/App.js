import './App.css';
import NavBar from './components/AppBar';
import Hero from './components/Hero';
import Mentors from './components/Mentors';
import Note from './components/Note';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Hero />
     <Note />
     <Mentors />
     <Testimonial />
    </div>
  );
}

export default App;
