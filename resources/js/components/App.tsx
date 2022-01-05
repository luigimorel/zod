<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import Home from './pages/Home'
import Demo from './pages/Solutions'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import Contact from './pages/Contact'
import SignIn from './accounts/SignIn'
import SignUp from './accounts/SignUp'
import ClientDashboard from './pages/ClientDashboard'

function App() {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/solutions" element={<Demo />} />
    <Route path="/dashboard" element={<AdminDashboard />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/accounts/sign-in" element={<SignIn />} />
    <Route path="/accounts/sign-up" element={<SignUp />} />
    <Route path="dashboard-client" element={<ClientDashboard />} />
   </Routes>
  </Router>
 )
=======
import React from "react";
import ReactDOM from "react-dom";

// Components
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
>>>>>>> adc64e7bc696ed74e3e8d9595b83dd8a4f781d29
}

export default App

if (document.getElementById('root')) {
 ReactDOM.render(<App />, document.getElementById('root'))
}
