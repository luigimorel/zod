import React from 'react'
import ReactDOM from 'react-dom'

// Components
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import Contact from './pages/Contact'
import SignIn from './accounts/SignIn'
import SignUp from './accounts/SignUp'
import ClientDashboard from './pages/ClientDashboard'
import AdminSettings from './dashboard/settings/admin.settings'
import ClientSettings from './dashboard/settings/client.settings'

function App() {
 return (
  <Router basename='/'>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/accounts/login" element={<SignIn />} />
    <Route path="/accounts/sign-up" element={<SignUp />} />
    <Route path="client-dashboard" element={<ClientDashboard />} />
    <Route path="/admin-dashboard/settings" element={<AdminSettings />} />
    <Route path="/client-dashboard/settings" element={<ClientSettings />} />
   </Routes>
  </Router>
 )
}

export default App

if (document.getElementById('root')) {
 ReactDOM.render(<App />, document.getElementById('root'))
}
