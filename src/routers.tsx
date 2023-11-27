import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserList } from './components/UserList';
import { UserDetails } from './components/UserDetails';

const ManyUserLists = () => (
    <>
    <UserList />
    </>

);

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManyUserLists />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}