//npm i react-router-dom
//npm install firebase
//npm i react-firebase-hooks
//npm i react-hook-form yup @hookform/resolvers



import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import { Main } from './pages/main/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/create-post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
