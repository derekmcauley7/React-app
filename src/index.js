import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Github } from './Github';
import { GraphQL } from './GraphQL';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/github" element={<Github />} />
      <Route path="/graphql" element={<GraphQL />} />
    </Routes>
  </BrowserRouter>
)