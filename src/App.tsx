import './index.css'
import { AuthLayout } from '@components/layout/AuthLayout'
import { Routes, Route } from 'react-router-dom'
import { DynamicPage } from '@lib/lazyImports'


function App() {
  return (
    <Routes>
      <Route path="/" element={<DynamicPage page="login" />} />
      <Route element={<AuthLayout />}>
        <Route path="/dashboard" element={<DynamicPage page="summary" />} />

      </Route>
      <Route path="/500" element={<DynamicPage page="error500" />} />
      <Route path="/401" element={<DynamicPage page="error401" />} />
      <Route path="/403" element={<DynamicPage page="error403" />} />
      <Route path="/404" element={<DynamicPage page="error404" />} />
    </Routes>
  )
}

export default App
