import './index.css'
import LoginPage from '@pages/Login/index'
import Summary from '@pages/Summary/Index'
import Error404 from '@layouts/404'
import Error500 from '@layouts/500'
import Error401 from '@layouts/401'
import Error403 from '@layouts/403'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/dashboard" element={<Summary />} />
      </Route>
      <Route path="/500" element={<Error500 />} />
      <Route path="/401" element={<Error401 />} />
      <Route path="/403" element={<Error403 />} />
      <Route path="/404" element={<Error404 />} />
    </Routes>
  )
}

export default App
