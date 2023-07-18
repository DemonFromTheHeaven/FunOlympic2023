import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout, Homepage, ContactUs, About, API, ForgotPassword, Register, Newlogin } from './importpages';
// import ProtectedRoute from './Pages/ProtectedRoute'
import './App.css';
import Live from "./Pages/Live";
import News from "./Pages/News";
import NewsDetail from "./Pages/NewsDetail";
import LiveDetail from "./Pages/LiveDetail";
import Profile from "./Pages/Profile";
import Privateroutes from "./privateroutes/Privateroutes";
import Nopage from "./Pages/Nopage";
import DeletedLive from "./components/admin/DeletedLive";
import DeletedNews from "./components/admin/DeletedNews";
import DisabledUser from "./components/admin/DisabledUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Privateroutes />}>

            <Route element={<MainLayout />}>
              <Route path="/" element={<Homepage />} exact />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/api" element={<API />} />
              <Route path="/live" element={<Live />} />
              <Route path="/live/:id" element={<LiveDetail />} />
              <Route path="/profile/deletelive/:id" element={<DeletedLive />} />
              <Route path="/profile/deletenews/:id" element={<DeletedNews />} />
              <Route path='/profile/disableorenable/:id' element={<DisabledUser />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Route>
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<Newlogin />} />
          <Route path="/signup" element={<Register />} />
          <Route path='/*' element={<Nopage />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
