import React from 'react';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import { Navigate  } from 'react-router-dom';

function App() {
  const {user} = useContext(AuthContext)

  return (
    <Router>
      <Routes>
      <Route path="/"  element={user ? <Home/> : <Register/> }/>
      <Route path="/login"  element={ user ? <Navigate  to="/" /> : <Login/> }/>
      <Route path="/register"  element={user ? <Navigate  to="/" /> : <Register />}/>
      <Route path="/profile/:username"  element={ <Profile/> }/>
      </Routes>
    </Router>
  );
}

export default App;
