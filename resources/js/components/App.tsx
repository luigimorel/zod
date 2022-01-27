import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// Static pages
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'

// User account management
import SignIn from './accounts/SignIn'
import SignUp from './accounts/SignUp'
import RecoveryPassword from './accounts/RecoverPassword'
import RecoveryAccountSuccess from './accounts/RecoveryAccountSuccess'
import ResetPassword from './accounts/ResetPassword'

// Dashboards
import ClientDashboard from './pages/ClientDashboard'
import AdminSettings from './dashboard/settings/admin.settings'
import AdminDashboard from './pages/AdminDashboard'
import ClientSettings from './dashboard/settings/client.settings'
import ErrorPage from './pages/ErrorPage'

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/contact-us" element={<Contact />} />
    {/* Components for the account management  */}
    <Route path="/accounts/recover-account" element={<RecoveryPassword />} />
    <Route path="/accounts/login" element={<SignIn />} />
    <Route path="/accounts/sign-up" element={<SignUp />} />
    <Route
     path="/accounts/recovery-success"
     element={<RecoveryAccountSuccess />}
    />
    <Route path="/accounts/reset-password" element={<ResetPassword />} />
    {/* Dashboard components  */}
    <Route path="/client-dashboard" element={<ClientDashboard />} />{' '}
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
    <Route path="/admin-dashboard/settings" element={<AdminSettings />} />
    <Route path="/client-dashboard/settings" element={<ClientSettings />} />
    <Route path="*" element={<ErrorPage />} />
   </Routes>
  </BrowserRouter>
 )
}

export default App

if (document.getElementById('root')) {
 ReactDOM.render(<App />, document.getElementById('root'))
}
