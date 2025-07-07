import './index.css'
import LoginForm from '@pages/Login/index'
import { AppSidebar } from '@components/layout/app-sidebar'
import Error500 from '@layouts/500'
import Error401 from '@layouts/401'
import Error403 from '@layouts/403'
import Error404 from '@layouts/404'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<LoginForm/>} />
        <Route path='/dashboard' element={<div>Dashboard</div>} />
        <Route path='/500' element={<Error500 />} />
        <Route path='/401' element={<Error401 />} />
        <Route path='/403' element={<Error403 />} />
        <Route path='/404' element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
