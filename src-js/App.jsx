import { Routes, Route } from 'react-router-dom'
import Home from '../src-js/pages/Home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* other routes */}
    </Routes>
  )
}
xx
export default App
