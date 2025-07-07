import './index.css'
import LoginForm from '@pages/Login/index'
import { AppSidebar } from '@components/layout/app-sidebar'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<LoginForm/>} />
        <Route path='/dashboard' element={<div>Dashboard</div>} />
      </Routes>
    </Router>
  )
}

export default App
