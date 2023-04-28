import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Sign from './pages/Sign';
import Notes from './pages/Notes';
import My from './pages/My';
import Groups from './pages/Groups';
import Edit from './pages/Edit';
import Tools from './pages/Tools';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/my" element={<My />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}