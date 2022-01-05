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
    <Route path="/accounts/login" element={<SignIn />} />
    <Route path="/accounts/sign-up" element={<SignUp />} />
    <Route path="dashboard-client" element={<ClientDashboard />} />
   </Routes>
  </Router>
 )
}

export default App

if (document.getElementById('root')) {
 ReactDOM.render(<App />, document.getElementById('root'))
}
