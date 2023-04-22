import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { Main } from './pages/main/main';
import { Login} from './pages/login';
import { Navbar } from './components/navbar';
import { Createpost } from './pages/create-post/create-post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Main />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/createpost" element = {<Createpost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
