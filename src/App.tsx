import './index.css'
import LoginForm from '@pages/Login/index'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<LoginForm/>} />
      </Routes>
    </Router>
  )
}

export default App
