import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Story from './pages/Story.jsx';
import Visit from './pages/Visit.jsx';
import Order from './pages/Order.jsx';
import Confirmed from './pages/Confirmed.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="our-story" element={<Story />} />
        <Route path="visit" element={<Visit />} />
        <Route path="order/:slug" element={<Order />} />
        <Route path="confirmed/:slug" element={<Confirmed />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
