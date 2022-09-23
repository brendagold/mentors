import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from './components/AppBar';
import Footer from './components/Footer';
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';



function App() {
  return (
    <div className="App">
     <NavBar />
     
     <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
