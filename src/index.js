import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StudentManagement from './components/Management/StudentManagement.js';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Routes>
            <Route path='/management' element={<StudentManagement/>} />
            <Route path='/' element={<App/>} />
        </Routes>
    </HashRouter>
);


