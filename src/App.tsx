import './index.css'
import LoginPage from '@pages/Login/index'
import Summary from '@pages/Summary/Index'
import { SidebarLayout } from '@components/layout/SidebarLayout'
import Error500 from '@layouts/500'
import Error401 from '@layouts/401'
import Error403 from '@layouts/403'
import Error404 from '@layouts/404'
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <Routes>
      {/* Rutas sin sidebar */}
      <Route path="/" element={<LoginPage />} />

      {/* Rutas con sidebar */}
      <Route element={<SidebarLayout />}>
        <Route path="/dashboard" element={<Summary/>} />
      </Route>
        <Route path="/500" element={<Error500 />} />
        <Route path="/401" element={<Error401 />} />
        <Route path="/403" element={<Error403 />} />
        <Route path="/404" element={<Error404 />} />
    </Routes>
  )
}

export default App
