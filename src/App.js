import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from './components/AppBar';
import Footer from './components/Footer';
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import RequestForm from './components/RequestForm';
import ViewMentors from './components/ViewMentors';



function App() {
  return (
    <div className="App">
     <NavBar />
     
     <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/allmentors" element={<ViewMentors />} />
        <Route path="/request" element={<RequestForm />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
