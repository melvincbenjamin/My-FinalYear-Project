import React from 'react';
import LoginSignup from './components/LoginSignup/LoginSignup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrugList from './components/DrugList';
import DrugForm from './components/DrugForm';

const App = () => {
   
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/alldrugs" element={<DrugList />} />
        <Route path="/add_drug" element={<DrugForm />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
