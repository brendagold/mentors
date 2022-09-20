import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from './components/AppBar';
import Footer from './components/Footer';
import Main from './components/Main';
import SignUp from './components/SignUp';



function App() {
  return (
    <div className="App">
     <NavBar />
     
     <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
