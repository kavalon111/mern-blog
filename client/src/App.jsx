import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './pages/AppRoutes';


export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}


